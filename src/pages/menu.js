let content = document.getElementById('content')
function menuListEl(){

    let menuDiv = myDiv()
    menuDiv.classList.add('grid');
    menuDiv.classList.add('content')

//Dish one
let section1 = myDiv()
section1.classList.add('section1')
let dishTitle = mypara("Dish Title: Pizza");
section1.appendChild(dishTitle);
 let availEl = mypara("Availability: Yes");
 section1.appendChild(availEl);
 let image1 = document.createElement('img');
 image1.src = "images/chef2.jpg"
 image1.classList.add('image')
 section1.appendChild(image1);

//Dish two
let section2 = myDiv()
section2.classList.add('section2')
let dishTitle2 = mypara("Dish Title: sausage");
section2.appendChild(dishTitle2);
 let availEl2 = mypara("Availability: Yes");
 section2.appendChild(availEl2);
 let image2 = document.createElement('img');
 image2.src = "images/food2.jpg" 
 image2.classList.add('menuImage')
 section2.appendChild(image2);

 //Dish Three
 let section3 = myDiv()
section3.classList.add('section3')
let dishTitle3 = mypara("Dish Title:Rice");
section3.appendChild(dishTitle3);
 let availEl3 = mypara("Availability: Yes");
 section3.appendChild(availEl3);
 let image3 = document.createElement('img');
 image3.src = "images/friedrice.jpg"
 image3.classList.add('menuImage')
 section3.appendChild(image3);

//Dish Four

 let section4 = myDiv()
section4.classList.add('section4')
let dishTitle4 = mypara("Dish Title: Grilled");
section4.appendChild(dishTitle4);
 let availEl4 = mypara("Availability: Yes");
 section4.appendChild(availEl4);
 let image4 = document.createElement('img');
 image4.src = "images/grilledchicken.jpg"
 image4.classList.add('menuImage')
 section4.appendChild(image4);



menuDiv.appendChild(section1);
menuDiv.appendChild(section2);
menuDiv.appendChild(section3);
menuDiv.appendChild(section4);

content.appendChild(menuDiv)
return menuDiv
}

function myDiv(){

    let divEl = document.createElement('div')
return divEl
}

function mypara(text){
let paraEl = document.createElement('p');
paraEl.textContent = text
return paraEl
}

function loadMenu() {
    let main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(menuListEl());
  }

export default loadMenu;
