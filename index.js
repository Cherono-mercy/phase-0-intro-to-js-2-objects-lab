// Defining an employee variable and assigning it an object using literal syntax
let employee = {
  name: "Sam",
  stretAddress: "20200 Nairobi",
};
employee;

//Non-destructively update the object values

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
  return {
    ...employee,
    [streetAddress]: "11 Broadway",
  };
}

//Destructively update an object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee["streetAddress"] = "12 Broadway";
  return employee;
}

//Non-destructively deleting an object property
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee["name"];
  return newEmployee;
}

//Destructively delete an object property
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee["name"];
  return employee;
}
