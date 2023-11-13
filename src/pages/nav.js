import createHome from "./home";
import loadMenu from "./menu"
import contact from "./contact";

let contents = document.getElementById('content')
function headerFunction(){
let nav = document.createElement('nav');
nav.classList.add('nav')

let header = document.createElement('h1');
header.textContent = 'Restaurant Page';
nav.appendChild(header)

//This creates the menulist
let home = document.createElement('ul');
home.classList.add('menu-list')

//This creates the Home Button
let homeList = list('Home')
homeList.classList.add('home');
home.appendChild(homeList);
homeList.classList.add('button-nav')
homeList.addEventListener("click", (e)=>{

    if(e.target.classList.contains("active"))return;
    setActiveButton(homeList);
    createHome();
});

//This creates the Home Button
let menuList = list('Menu');
menuList.classList.add('menu');
menuList.classList.add('button-nav')
home.appendChild(menuList);
menuList.addEventListener("click", (e)=>{

    if(e.target.classList.contains("active"))return;
        setActiveButton(menuList);
        loadMenu();
    });
//This creates the contact Button
let contactList = list('Contact');
contactList.classList.add('contact');
contactList.classList.add('button-nav')
home.appendChild(contactList)
contactList.addEventListener("click", (e)=>{

    if(e.target.classList.contains("active"))return;
        setActiveButton(contactList);
        contact();
    });

nav.appendChild(home);



function createMain() {
    const main = document.createElement("main");
    //main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

  nav.appendChild(createMain()) 
return nav
}

function list(text){
    let myList = document.createElement('li');
    myList.textContent = text;
    return myList;
}


//This functions is responsible for making our tab module display only once when clicked

function setActiveButton(button){
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button)=>{
        if(button !== this){
            button.classList.remove("active")
        }
    });

    button.classList.add("active");
}



let whatToExport = ()=>{
    let contents = document.getElementById('content')
    contents.appendChild(headerFunction())
    createHome()

}




export default whatToExport;