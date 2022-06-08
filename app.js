// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//选择elements
const toggleUl = document.querySelector(".links");
const toggleButton = document.querySelector(".nav-toggle");

// //增删class方法一：toggle
// toggleButton.addEventListener("click", function () {
//   toggleUl.classList.toggle("show-links");
// });

//增删class方法二：add&remove
toggleButton.addEventListener("click", function () {
  // //用if
  //     if (toggleUl.classList.contains("show-links")) {
  //     toggleUl.classList.remove("show-links");
  //   } else {
  //     toggleUl.classList.add("show-links");
  //   }
  //用ternary operator
  const ulClass = toggleUl.classList;
  ulClass.contains("show-links")
    ? ulClass.remove("show-links")
    : ulClass.add("show-links");
});
