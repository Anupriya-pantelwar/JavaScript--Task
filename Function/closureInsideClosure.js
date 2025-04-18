function init() {
  var name = "Mozilla"; // name is local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  // now its print Anupriya beca, when closure return
  // then it will return with function and
  // its lexical references.

  name = "Anupriya";
  return displayName;
}
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      let a = 2;
      console.log(a);
      const z = () => {
        let a = 3;
        console.log(a);
      };
      z();
    };
    y();
  };
  return x;
}
let a = returnFunc();
a();
