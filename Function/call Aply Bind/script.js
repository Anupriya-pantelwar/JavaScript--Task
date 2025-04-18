// Arrow Function

//call , Apply , Bind :
// to access , invoke, borrowing one function properties into another function

const student = {
  name: "Kishan",
  rollNo: 387,

  //Method : - function inside method
  printDetail: function (state) {
    console.log(this.name + " " + this.rollNo + " " + state);
  },
};
student.printDetail();

const student1 = {
  name: "learn",
  rollNo: 400,
};
//CALL
console.log("--------call---------");
student.printDetail.call(student1, "delhi");
//Apply
console.log("-------apply-------");
student.printDetail.call(student1, ["delhi"]);
// Bind
console.log("-----BIND--------");
const detail = student.printDetail.bind(student1, "delhi");
detail();
