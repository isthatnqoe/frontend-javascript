interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks():string;
}

class Director implements DirectorInterface{
  workFromHome(): string {
    return "Working from Home"
    
  }

  getCoffeeBreak(): string {
    return "Get Coffee Break"
  }

  workDirectorTasks(): string {
    return "Work Director Tasks"
  }
}

class Teacher implements TeacherInterface{
  workFromHome(): string {
    return "Cannot work from Home"
  }
  getCoffeeBreak(): string {
    return "Cannot get Coffee Break"
  }
  workTeacherTasks(): string {
    return "Cannot work Director Tasks"
  }
}

function createEmployee(salary:number | string): Director | Teacher{
  if (typeof salary === 'number' && salary < 500){
    return new Teacher
  }

  return new Director

}

// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  // Check if the employee has the method specific to Director
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute the appropriate work method based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    // If employee is a Director, call workDirectorTasks
    return employee.workDirectorTasks();
  } else {
    // Otherwise, assume the employee is a Teacher and call workTeacherTasks
    return employee.workTeacherTasks();
  }
}
