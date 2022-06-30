const array = ["html", "css", "js"];

const ul = document.createElement("ul");
document.body.prepend(ul);

 const render = (array) => {
for(let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.append(li);
}
}
render(array);
console.log(ul);




