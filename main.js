const button = document.getElementById("button")
console.log(button);
const body = document.getElementById("body")
console.log(body);

const colors =['red','blue','royalblue','green']

button.addEventListener('click',(eo) => {
    const randomcolors=colors[Math.floor(Math.random()*colors.length)]
    body.style.backgroundColor=randomcolors
}
)