const jokeDiv = document.getElementById("joke-div");
const btn = document.getElementById("btn");


const GetData = async  () =>{

const config = {
  headers : {
   Accept : "application/json"
  }
}

 let response = await fetch("https://icanhazdadjoke.com/",config);
 let data = await response.json();
 
 jokeDiv.innerHTML = data.joke
}

btn.addEventListener("click",GetData);

window.onload = GetData;