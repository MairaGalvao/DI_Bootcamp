const getEmployees = async () => {
    try {
      const response = await fetch('https://zivuch.github.io/employees.json');
      const data = await response.json()
      return data.employees;
    }
    catch (error) {
      console.log(error);
    }
  };
  const asyncEmployees = async () => {
    let employees = await getEmployees();
    console.log(employees);
  }
  const filterEmployees = async () => {
      let employees = await getEmployees();
      const input = document.getElementById('filter_input').value;
      const filter = employees.filter(item => {
          return item.firstName.toLowerCase().includes(input.toLowerCase())
      })
      console.log(filter);
  }


// const sortEmployeesAge = async() => {
//     let sortAge = awayt 
// }


const sortEmployeesName = async() = > {
    let name = await getEmployees()
    const sort = employees.sort
    

}