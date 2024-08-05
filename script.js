const getColor = ()=>{
    // hex code 
    const randomNumb = Math.floor(Math.random()* 16777215);
    const randomColor = "#" + randomNumb.toString(16);
    console.log(randomNumb, randomColor);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText =randomColor;

    navigator.clipboard.writeText(randomColor)
}
// event call 
document.getElementById("btn").addEventListener("click", getColor);


// initial call 
getColor();