const lorem=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae aut quisquam est obcaecati pariatur dolor aliquam similique voluptas quae recusandae commodi veniam vero, nemo vitae sunt. At, praesentium soluta.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, harum dicta. Esse, amet quisquam. Autem blanditiis fugiat adipisci quidem molestias sunt sed neque consequatur consectetur, vitae dolores minima earum deserunt?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eaque quaerat quo dicta corporis saepe doloremque tempora unde architecto sapiente, cumque dolore nostrum nihil voluptatibus minus debitis maxime ex itaque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta pariatur in sint ad! Provident ducimus numquam labore id ea vero autem possimus quo voluptates omnis officia voluptatum, pariatur corporis!
`;

const $form = document.getElementById('form');
const $main = document.getElementById('main');

$form.addEventListener("submit" , (event)=> {
    event.preventDefault();
    const value = event.target['count'].value;
    if(!isNaN(value) && (value >=0)){
        clearResult();
        createParagraph(value);
    }
})

function clearResult(){
    $main.innerHTML ="";
}


function getString(){
    const index=Math.floor(Math.random() * 859);
    console.log(lorem.length)
    const loremIpsum = lorem.substring(index,30);
    return loremIpsum; 
}

function createParagraph(value){
    for(let i=0 ; i<value;i++ ){
        const str = getString();
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.innerText = str; 
        $main.appendChild(paragraph);
    }
    
}