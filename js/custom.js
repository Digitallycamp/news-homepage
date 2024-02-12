import { posts } from "../data.js"

const menu_icon = document.querySelector('.menu_icon')
const nav_right = document.querySelector('.nav_right')



const menu_iconImage = document.querySelector('.menu_icon img')
console.log(menu_iconImage)

// menu_icon.addEventListener('click', ()=> {
//     nav_right.classList.toggle('mobile')
// })

menu_icon.addEventListener('click', ()=> {
    nav_right.classList.toggle('mobile')
 

    if( !nav_right.classList.contains('mobile')){
        menu_iconImage.src="../assets/images/icon-menu.svg"
    }else if(nav_right.classList.contains('mobile')){

        menu_iconImage.src="../assets/images/icon-menu-close.svg"
    }
   

})


//section login

const postElement = document.querySelector('.post')
let elem=" " ;
posts.forEach( post => {
       elem +=`
       
     
       <div class="post_one">
           <div class="left">
               <img src=${post.image}>
               
           </div>
           <div class="right">
               <h3>0${post.id}</h3>
               <h5>${post.title}</h5>
               <p>${post.body}</p>
           </div>
       </div> 
       
       `;
       postElement.innerHTML = elem;
});