console.log("hello");
let ea1 = document.getElementById("ea1");
let ea2 = document.getElementById("ea2");
let ea3 = document.getElementById("ea3");
let resultVal = document.getElementById("result_val");

function getval(event) {
  event.preventDefault();
  var valueSum =
    parseFloat(ea1.value) + parseFloat(ea2.value) + parseFloat(ea3.value);

  let result =
    valueSum > 10000 ? valueSum - 10000 + "원 초과했음" : "관리잘했음";

  resultVal.innerHTML = result;
}
