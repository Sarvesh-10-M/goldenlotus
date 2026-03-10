function subscribeEmail(){

const email = document.querySelector(".subscribe-form input").value

fetch("http://localhost:5000/subscribe",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email:email})

})

.then(res=>res.json())
.then(data=>{

alert("Subscribed successfully")

})

}