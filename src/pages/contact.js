function contact(){
    let contact = document.createElement('div');
    contact.classList.add('content')
    let phoneNum = document.createElement('p');
    phoneNum.textContent = "Phone Number: 080-856-456";
    contact.appendChild(phoneNum);
    let emailAdd = document.createElement('p');
    emailAdd.textContent = "Email Address: abc@gmail.com";
    contact.appendChild(emailAdd);

    
    return contact
}

function contactEl() {

    let main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contact());
   
  }












export default contactEl