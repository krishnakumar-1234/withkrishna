// const about_section = document.getElementById('about_section');
// const anmi = document.querySelectorAll("p").forEach();
// about_section.addEventListener("mouseover", () => {
//     console.log("HElooe")

// })

const main = document.querySelector("main");
const web_loader = document.getElementById('web_loader');
web_loader.style.display = "flex";
main.style.display = "none";
setTimeout(() => {
    web_loader.style.display = "none";
    main.style.display = "block";

    
}, 4000);

const body = document.querySelector("body");
main.addEventListener("mousemove", () => {
  // console.log("hello")
})

document.getElementById('sign').addEventListener('click', function(){
    document.getElementById('signContainer').style.display = 'block';
    console.log("Yes, This is working form sidebar");

})
document.getElementById('cutting').addEventListener('click', function(){
    document.getElementById('signContainer').style.display = 'none';
    console.log("Yes, This is working form sidebar cutting");


})
const openLiks = document.getElementById('openLiks')
const LinksPgae = document.getElementById('LinksPgae');
const closeLinks = document.getElementById('closeLinks');
openLiks.addEventListener('click', (e) => {
    console.log('This is liks button cliked', e)
    LinksPgae.style.display = 'block';
})
closeLinks.addEventListener('click', (e) => {
    console.log('This is closeLiks button cliked', e)
    LinksPgae.style.display = 'none';
})


document.getElementById('tool').addEventListener('click', function(){
    console.log("This is opne tab of tool");
    document.getElementById('tool').style.display = 'none';
    document.getElementById('tools').style.display = 'flex';
    document.getElementById('flag').style.display = 'none';
    document.getElementById('five').style.display = 'flex';
  
})
document.getElementById('tools').addEventListener('click', () =>{
    console.log("This is opne tab of tool off");
   document.getElementById('five').style.display = 'none';
   document.getElementById('tool').style.display = 'flex';
   document.getElementById('flag').style.display = 'block';
   document.getElementById('tools').style.display = 'none';

})



let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
let email = document.getElementById('email')
let name = document.getElementById('name')
let password = document.getElementById('password')
let profile = document.getElementById('profile');
profile.innerText = `${name.value}`


if (name.value == "" || password.value == "" || email.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${name.value} and password of ${password.value} ${email.value}`
    );


    email.value = "";
    password.value = "";
name.value = "";
}
});

