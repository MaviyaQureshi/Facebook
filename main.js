function validate() {
  username = document.getElementById("name").value;
  Alert = document.getElementById("alert");
  password = document.getElementById("word").value;
  if (username == "" || password == "") {
    Alert.style.visibility = "visible";
    Alert.style.padding = "5px 0px 0px 15px";
    Alert.innerHTML = "Please enter username and password";
  } else if (username === "MaviyaQureshi" && password === "maviya1234") {
    Alert.style.visibility = "hidden";
    Alert.style.padding = "0px 0px 0px 0px";
    alert("You have sucessfully logged in");
    window.location.href = "https://www.facebook.com/maviya.qureshi.733";
  } else if (username != "MaviyaQureshi" || password != "maviya1234") {
    alert("Please enter a valid username and password");
  }
}

function Password() {
  password = document.getElementById("word");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
