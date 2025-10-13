let userform = document.querySelector("form");
userform.addEventListener("submit", (e) => {
  console.log("your first name is : "+e.target.firstname.value);
  e.preventDefault();
});
let userform2 = document.querySelector("form");
userform2.addEventListener("submit", (e) => {
  console.log("your last name is : "+e.target.lastname.value);
  e.preventDefault();
});
let userform3 = document.querySelector("form");
userform3.addEventListener("submit", (e) => {
  console.log("your father name is : "+e.target.fathername.value);
  e.preventDefault();
});
let userform4 = document.querySelector("form");
userform4.addEventListener("submit", (e) => {
  console.log("your number name is : "+e.target.number.value);
  e.preventDefault();
});
let userform5 = document.querySelector("form");
userform5.addEventListener("submit", (e) => {
  console.log("your national code is : "+e.target.national.value);
  e.preventDefault();
});
let userform6 = document.querySelector("form");
userform6.addEventListener("submit", (e) => {
  alert("Your information has been registered.")
});