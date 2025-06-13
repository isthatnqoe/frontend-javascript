interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
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
  workDirectorTasks(): string {
    return "Cannot work Director Tasks"
  }
}

function createEmployee(salary:number | string): Director | Teacher{
  if (typeof salary === 'number' && salary < 500){
    return new Teacher
  }

  return new Director

}

