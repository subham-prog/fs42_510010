function createEmployee(name, role, salary) {
  return {
    name: name,
    role: role,
    salary: salary,
    introduce: function () {
      console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
    }
  };
}
const emp1 = createEmployee("Rahul", "Frontend Developer", 50000);
const emp2 = createEmployee("Sneha", "Backend Engineer", 60000);

emp1.introduce(); 
emp2.introduce(); 
