const $tabs = document.querySelectorAll('.tab-btn');
const $content = document.querySelectorAll('.content');

addListenersTabs($tabs);


function addListenersTabs(buttons){
    buttons.forEach(btn => {
        btn.addEventListener('click', showTabs);
    });
}




function showTabs(event){
    const tabId = event.srcElement.dataset.id;
    $content.forEach(cont => {
        cont.classList.remove('active');
        if(cont.id == tabId){
            cont.classList.add('active');
        }
    })

    $tabs.forEach(tab => {
        tab.classList.remove('active');
        if(tab.dataset.id == tabId){
            tab.classList.add('active');
        }
        
    })

}
