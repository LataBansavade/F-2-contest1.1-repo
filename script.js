const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.map((element)=>{
    if(element.profession==="developer")
    {
      console.log(element);
    }
  })
}

// 2. Add Data
function addData() {
   
    let obj =   { name: "jasmin", age: 28, profession: "SDE" }
   data.push(obj)
   console.log(data);
}

// 3. Remove Admins
function removeAdmin() {

  data.map((element)=>{
    if(element.profession !== 'admin')
    {
      console.log(element);
    }
  })


}

// 4. Concatenate Array
function concatenateArray() {

  let arr =[
    { name: "lata", age: 22, profession: "manager" },
    { name: "Rita", age: 23, profession: "developer" }
  ]

  let arr2 = [...data, ...arr];

 console.log(arr2);
}

// 5. Average Age
function averageAge() {
  let sum = 0
  let count = 0;
   data.map((element)=>{
   sum = sum + element.age;
   count++;
   })
   let avg = sum/count;
   console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
  let result = data.filter((element)=>{
    return element.age > 25 
  })
  console.log("yes",result);
}

// 7. Unique Professions
function uniqueProfessions() {
  
  data.map((element)=>{
    console.log(element.profession);
  })

}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
let ans = 0
  data.map((element , index)=>{
    if(element.name ==="John")
    {
       ans = index
    }
  })
  data[ans].profession ="manager";
  console.log(data);

}

// 10. Profession Count
function getTotalProfessions() {
let countadmin = 0;
let countdeveloper=0;
  data.map((element)=>{
    if(element.profession === "admin"){
      countadmin++;
    }
    if(element.profession === "developer")
    {
      countdeveloper++;
    }
  })

  console.log("total number of developers are: ",countdeveloper);
  console.log("total number of admins are: ",countadmin);
}