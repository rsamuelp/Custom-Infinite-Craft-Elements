let choice = prompt("Add a custom Element");
let poice = prompt("Add an emoji");

let existingData = localStorage.getItem("infinite-craft-data");
let data;


if (existingData) {
    data = JSON.parse(existingData);
} else {
   
    data = { elements: [], darkMode: false };
}


data.elements.push({ text: choice, emoji: poice, discovered: false });


localStorage.setItem("infinite-craft-data", JSON.stringify(data));
location.reload();
