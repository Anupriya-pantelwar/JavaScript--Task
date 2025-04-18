message = "Good Global";
function hello1() {
  message = "Good Morning";
  {
    let message = "Good Afternoon";
    console.log("Hello 1 : " + message);
  }
  console.log(message);

  let c = function hello2() {
    console.log("I am c" + message);
  };
  return c;
}

c = hello1();
c();
