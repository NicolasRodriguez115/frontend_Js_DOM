// ================================================================================ 1. Document Manipulation with JavaScript ===================================================================================

let products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful computing on the go",
  },
  {
    name: "Smartphone",
    price: 699.99,
    description: "Stay connected wherever you are",
  },
  {
    name: "Headphones",
    price: 149.99,
    description: "Immersive audio experience",
  },
];

function getProductsInfo() {
  return products.map(
    product => `${product.name}, $${product.price}, ${product.description}`
  );
}

function displayProductsInfo() {
  const ul = document.createElement("ul");
  getProductsInfo().map(product => {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  });
  document.getElementById("products").appendChild(ul);
}

document.getElementById("getProducts").addEventListener(
  "click",
  () => {
    displayProductsInfo();
    alert("Button clicked!");
  },
  { once: true }
);

// ================================================================================ 2. Form Manipulation with JavaScript ===================================================================================

function User(userName, userEmail, userMessage) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.userMessage = userMessage;
}

let users = [];

function getInfo(event) {
  event.preventDefault();
  const userName = event.target.form.elements.userName.value;
  const userEmail = event.target.form.elements.userEmail.value;
  const userMessage = event.target.form.elements.userMessage.value;

  if (!userName || !userEmail || !userMessage) {
    alert("All fields must be filled!");
    return;
  } else {
    let user = new User(userName, userEmail, userMessage);
    users.push(user);
    console.log(users);
  }
}

document.getElementById("saveInput").addEventListener("click", event => {
  getInfo(event);
});

// ================================================================================ 3. Styling with JavaScript ===================================================================================

function changeColor(){
  document.getElementById("box").style.backgroundColor = "lightblue"
}

function underline(){
  document.getElementById("box1").classList.add("underline")
}

function highlight(){
  document.getElementById("box2").classList.add("highlighted")
}

function changeTextColor(){
  document.getElementById("box3").style.color = "blue"
}


function changeSize(){
  document.getElementById("box4").style.alignSelf = "start"
}
