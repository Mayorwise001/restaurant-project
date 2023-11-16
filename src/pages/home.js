let content = document.getElementById('content')

function createHome(){
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('content');

    let title = para("Exceptional Restaurant");
    homeDiv.appendChild(title);

    let text1 = para("Founded with passion since 1980");
    homeDiv.appendChild(text1);

    //Image tag
    let image = document.createElement('img');
    image.src="images/chef2.jpg";
    image.classList.add("image");
    homeDiv.appendChild(image);

    //Order Button
    let orderBtn = document.createElement('button');
    orderBtn.textContent = "Order Now Now";
    orderBtn.classList.add("order");
    homeDiv.appendChild(orderBtn);

    //Visit Address
    let visitParag = para("Visit us @ www.mayorwise.com.ng");
    visitParag.classList.add('visit')
    homeDiv.appendChild(visitParag);



    content.appendChild(homeDiv);
return homeDiv;
}

function para(text){
    let paraG = document.createElement('p');
    paraG.textContent = text;
    return paraG;
}



function createHomeEl() {

    let main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
   
  }

export default createHomeEl
