// Interface definition
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Test object (optional, useful for testing or execution)
const teacher: Teacher = {
  firstName: "John",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
  contract: false
};

console.log(teacher);
