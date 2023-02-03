const theme = document.getElementById("theme");
function rgb() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}
theme.addEventListener("click", () => {
    const randomColor = rgb();
    const bdr = document.querySelectorAll(".aside, th, td");
    const bdl = document.querySelectorAll(".lt-border");
    const bdb = document.querySelectorAll("td, th");
    const bdt = document.querySelectorAll("th");
    const color = document.querySelectorAll("a, .name, h3");
    const border = document.querySelectorAll(".about, .highlight, #theme, .name, img");
    const bgcolor = document.querySelectorAll('.about, .highlight, #theme, hr');
    const webkit = document.querySelectorAll("::-webkit-progress-value");
    color.forEach(element => element.style.color = randomColor);
    bgcolor.forEach(element => element.style.backgroundColor = randomColor);
    border.forEach(element => element.style.border = `2px solid ${randomColor}`);
    bdr.forEach(element => element.style.borderRight = `2px solid ${randomColor}`);
    bdl.forEach(element => element.style.borderLeft = `2px solid ${randomColor}`);
    bdb.forEach(element => element.style.borderBottom = `2px solid ${randomColor}`);
    bdt.forEach(element => element.style.borderTop = `2px solid ${randomColor}`);
    webkit.forEach(element => element.style.backgroundColor = randomColor); //not working
})
hover.addEventListener("mouseover", () => {
    const hover = document.querySelectorAll(".highlight");
    const randomColor = rgb();
    hover.forEach(element => element.style.backgroundColor = "white");
    hover.forEach(element => element.style.color = randomColor); // this code not working
})
