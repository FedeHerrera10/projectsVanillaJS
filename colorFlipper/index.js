const arrHex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const $btnChangeColor = document.getElementById('change-color');
const $spanColor = document.getElementById('color-hexa');
const $labelCopy = document.getElementById('labelCopy');

function randomHexa() {
    let index;
    let hexa="";
    for(let i=0 ; i <6;i++){
        index=Math.floor(Math.random() * 16);
        hexa +=arrHex[index];
    }
    return hexa;
}


$btnChangeColor.addEventListener('click', () => {
    $labelCopy.style.display ='none'
    const color = "#" + randomHexa();
    $spanColor.innerText = color
    document.body.style.backgroundColor = color;
})

$spanColor.addEventListener('click', () => {
    copyToClipboard();
    $labelCopy.style.display ='inline'
    $labelCopy.style.transition='1s';
})

function copyToClipboard(){
    const inputCopy = document.createElement('input');
    inputCopy.value = $spanColor.innerText || "#FFFFFF";
    document.body.appendChild(inputCopy);
    inputCopy.select();
    document.execCommand("copy");
    document.body.removeChild(inputCopy);
}