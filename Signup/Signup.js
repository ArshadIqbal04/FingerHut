var arr = [];
function signup(event) {
    // alert("abcd")
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    password: document.getElementById("pass").value,
    password: document.getElementById("confirmpass").value,
  };
  arr.push(data);
  localStorage.setItem("signup", JSON.stringify(arr));
  window.location.href = "../Login/Login.html";
}