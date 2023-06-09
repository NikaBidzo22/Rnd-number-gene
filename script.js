const btn = document.querySelector(".btn");
const two = document.querySelector(".btnTwo");
const rain = document.querySelector(".animation");
const random = document.querySelector(".one");
const second = document.querySelector(".second");
const result = document.querySelector(".promt");
const rndNumber = document.querySelector(".random-number");
const reject = document.querySelector(".reject");

console.log(two);

function go() {
  result.style.display = "flex"
}

btn.addEventListener("click", function () {
  let x = Math.floor(Math.random() * 5 + 1);
  rain.style.animation = "rain 3.6s";
  two.style.display = "flex";
  btn.style.display = "none";
  console.log(x);
  random.innerHTML = x;
  rndNumber.innerHTML = x;
  setTimeout(go ,3240);
});

two.addEventListener("click", function () {
  btn.style.display = "flex";
  two.style.display = "none";
  rain.style.animation = "none";
  random.innerHTML = "1";
  rndNumber.innerHTML = "1";
});

reject.addEventListener('click' , function() {
  result.style.display = "none"
});