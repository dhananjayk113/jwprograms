let car={
    brand:"Toyota",
    model:"Corolla",
    year: 2020,
    start: function(){
        console.log("Car Started");
    }
};
console.log(car);
car.start();

let company = {
  name: "TechCorp",
  location: "San Francisco",
  departments: {
    engineering: {
      head: "John Doe",
      employees: 50
    },
    marketing: {
      head: "Jane Smith",
      employees: 30
    }
  }
};
console.log(company);
console.log(company.departments);
console.log(company.departments.engineering);
console.log(company.departments.marketing);
console.log(company.departments.engineering.head);
