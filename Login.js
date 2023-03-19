function login(event) {
  event.preventDefault();
  

  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  

  if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all required fields.");
      return;
  }
  

  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData || email !== userData.email || password !== userData.password) {
      alert("Invalid email or password. Please try again.");
      return;
  }
  else
  {
    alert("Login succesfull,You will be redirected shortly");
  window.location.href = "dashboard.html";
  }
}


const loginForm = document.getElementById("box");
loginForm.addEventListener("submit", login);
