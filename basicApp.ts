
// class Movie {
//   public attr:{} = {
//     name: "Pirates of Caribbean",
//     date: new Date(2003, 7, 9)
//   };
//   printName = ():void => {
//     console.log(this.attr)
//   }
// }

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("hi")
  var img = document.createElement("img");
  // img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
  img.src = "./images/akko.jpg";
  var src = document.getElementById("movies");
  if(src){
    src.appendChild(img);
  }
  
})

// const movieItem = document.createElement("div")
// movieItem.innerHTML = 'hello'
// const parentElement = document.querySelector('#movies')
// if(parentElement){
//   parentElement.append(movieItem)
// }

// const template = ():string => {
//   return `<div>
//     <p>Hi</p>
//     <img src="../../images/akko.jpg">
//     <img src="../../images/calli.jpg">
//     <img src="../../images/cute.png">
//   </div>`
// }

// document.addEventListener("DOMContentLoaded", ()=>{
//   const movieItem = document.createElement("img")
//   const parentElement = document.querySelector('#movies')
//   // movieItem.innerHTML = template()
//   movieItem.src = "../../akko.jpg"
//   if(parentElement){
//     parentElement.append(movieItem)
//   }  
  
// })


// const movie1 = new Movie()
// movie1.printName();

// <img src="../../images/akko.jpg">
// <img src="../../images/calli.jpg"> 
// <img src="../../images/cute.png">