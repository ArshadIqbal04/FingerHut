function signup(event){
    event.preventDefault();

    
  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const password = document.getElementById("pass").value;
  const confirmPassword = document.getElementById("confirmpass").value;
  const customerNumber = document.getElementById("customerNumber").value;
  
  if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
  alert("Please fill in all required fields.");
  return;
  }
  if (password !== confirmPassword) {
  alert("Passwords do not match. Please try again.");
  return;
  }
  
  // save the form data to local storage
  const userData = { name, email, password, customerNumber };
  localStorage.setItem("userData", JSON.stringify(userData));
  
  alert("Signup successful! You will be redirected shortly.");
  window.location.href="Login.html";
    
}