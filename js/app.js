let userform = document.querySelector("form");
let firstname = document.querySelector(".aval");
let lastname = document.querySelector(".dovom");
let fathername = document.querySelector(".sevom");
let age = document.querySelector(".chaharom");
firstname.addEventListener("blur",(e)=>{
  console.log(e.target.value)
})
lastname.addEventListener("blur",(e)=>{
  console.log(e.target.value)
})
fathername.addEventListener("blur",(e)=>{
  console.log(e.target.value)
})
age.addEventListener("blur",(e)=>{
  console.log(e.target.value)
})
userform.addEventListener("submit", (e) => {
  console.log(
    "Your first name is : " + e.target.firstname.value,
    "Your last name is : " + e.target.lastname.value,
    "Your father name is : " + e.target.fathername.value,
    "Your number name is : " + e.target.age.value,
    "Your national name is : " + e.target.national.value
  );
  e.preventDefault();
});
if (Number(age.value) <= 0) {
  alert("your number is Not Define");
} if (
  firstname.value === "" ||
  lastname.value === "" ||
  fathername.value === ""
) {
  alert("pleas complete all questions.");
} if (
  firstname === value.length < 3 ||
  lastname === value.length < 3 ||
  fathername === value.length < 3
) {
  alert("You cannot enter a name with fewer than 3 letters.");
} else {
  alert("Everything is great, thank you for your support.😘");
}
