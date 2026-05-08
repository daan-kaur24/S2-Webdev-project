function registerUser() {
  localStorage.setItem("user", JSON.stringify({
    name: regName.value,
    email: regEmail.value,
    pass: regPass.value
  }));
  alert("Registered!");
  location.href="login.html";
}

function loginUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && loginEmail.value===user.email && loginPass.value===user.pass){
    localStorage.setItem("loggedIn","true");
    location.href="index.html";
  } else {
    alert("Invalid");
  }
}

function checkLogin(){
  const logged=localStorage.getItem("loggedIn");
  const auth=document.getElementById("auth-link");
  const dash=document.getElementById("dashboard-link");

  if(logged){
    if(auth) auth.style.display="none";
    if(dash) dash.style.display="inline";
  }
}

function loadUser(){
  const user=JSON.parse(localStorage.getItem("user"));
  if(user){
    userData.innerText="Welcome "+user.name;
  }
}

function bookNow(name){
  const bookings=JSON.parse(localStorage.getItem("bookings"))||[];
  bookings.push({package:name,date:new Date().toLocaleString()});
  localStorage.setItem("bookings",JSON.stringify(bookings));
  alert("Booked!");
}

function loadBookings(){
  const list=document.getElementById("bookingList");
  const bookings=JSON.parse(localStorage.getItem("bookings"))||[];
  list.innerHTML="";
  bookings.forEach(b=>{
    const li=document.createElement("li");
    li.innerText=b.package+" - "+b.date;
    list.appendChild(li);
  });
}

function logout(){
  localStorage.removeItem("loggedIn");
  location.href="index.html";
}

function toggleInfo(id) {
  const section = document.getElementById(id);
  section.style.display =
    section.style.display === "block" ? "none" : "block";
}