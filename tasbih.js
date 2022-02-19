function tasbih(getId, isAdding) {
    let count = document.getElementById(getId);
    let text = count.innerText;
    let number = parseInt(text);
    if (isAdding == true) {
        count.innerText = number + 1;
    }
    else if(number>0) {
        count.innerText = number - 1;
    }
}


document.getElementById('+').addEventListener('click', () => {
   tasbih('count',true)
})
document.getElementById('-').addEventListener('click', () => {
   
    tasbih('count',false)
})
