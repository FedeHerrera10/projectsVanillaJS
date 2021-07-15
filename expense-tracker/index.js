const buttons =  document.querySelectorAll('.btn-type');
const swhitchBtn= document.querySelector('.container-switch');
const form = document.querySelector('form');
const expenses = document.querySelector('#expenses');
const errorText = document.querySelector('.error');
const totalBalance = document.querySelector('.total');
const incomeBalance = document.querySelector('.incomeValue');
const expensesBalance = document.querySelector('.expensesValue');
const containerTransactions = document.querySelector('.container-history-card'); 


let income=0;
let expensesValue=0;
let incomeArr ;
let expensesArr;

buttons.forEach(button => {
    button.addEventListener('click', btnActive)
})

/* -- Switch event button --*/
function btnActive(e){
    if(e.target.innerText === 'Income'){
        swhitchBtn.classList.remove('rigth');
        swhitchBtn.classList.add('left');
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    } else{
        swhitchBtn.classList.remove('left');
        swhitchBtn.classList.add('rigth');
        buttons[1].classList.remove('active');
        buttons[0].classList.add('active');
    }
}

/*-- Form submit --*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(expenses.value <= 0) {
        errorText.innerText = 'Expenses not valid';
        errorText.style.visibility='visible';
        return;
    }

    const button =  document.querySelectorAll('.btn-type.active');
    const type =button[0].textContent.toLocaleLowerCase();
    
    const transaction = {
        id:Date.now(),
        dateTr:createDate(),
        value:expenses.value
    }
    
    saveTransaction(type,transaction)
    reset();
    getTransactions();
    

})

expenses.addEventListener('focus' , () => {
    errorText.style.visibility='hidden';
})

/*-- Get incomes and expenses --*/
function getTransactions(){
    incomeArr = JSON.parse(localStorage.getItem('incomes')) || [] ;
    expensesArr=JSON.parse(localStorage.getItem('expenses')) || [] ;
    setValuesBalance();
    
}

/*-- Create element html for transactions --*/

function createUITransactions(type,transaction){
    let card = document.createElement('div');
    let span = document.createElement('span');
    let span2 = document.createElement('span');
    let i2 = document.createElement('i');
    i2.classList.add('fas');
    if(type==='income') {
        i2.classList.add('fa-level-up-alt');
    } else{
        i2.classList.add('fa-level-down-alt');
    }


    let i = document.createElement('i');
    let p = document.createElement('p');
    card.classList.add('history-card');
    span.classList.add('icon-close');
    i.classList.add('fas');
    i.classList.add('fa-times');
    i.dataset.id=transaction.id;
    i.dataset.type=type;
    span2.classList.add('icon-history');
    i2.textContent = `  ${transaction.dateTr}`;
    span2.appendChild(i2);
    p.textContent=`$${transaction.value}`;
    span.appendChild(i);
    card.appendChild(span);
    card.appendChild(span2);
    card.appendChild(p);
    containerTransactions.appendChild(card);
}
/* Create date submit --*/

function createDate(){
    let date = new Date();
    let dateStr =
        ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
        ("00" + date.getDate()).slice(-2) + "/" +
        date.getFullYear() + " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + ":" +
        ("00" + date.getSeconds()).slice(-2);
    return dateStr
}

/*-- Set values for card balance --*/

function setValuesBalance(){
    let total =0;

    expensesArr.length > 0 
        ? expensesArr.map(exp => {
            createUITransactions('expense',exp)
            total -= (Number(exp.value));
            expensesValue +=(Number(exp.value));
            }) 
        : 0
        
            
    incomeArr.length > 0
        ? incomeArr.map(inc => {
            createUITransactions('income',inc)
            total += (Number(inc.value));
            income +=(Number(inc.value));
            })
        : 0 ;

    totalBalance.innerText = `$ ${total.toFixed(2)}`;
    incomeBalance.innerText = `$ ${income.toFixed(2)}`;
    expensesBalance.innerText = `$ ${expensesValue.toFixed(2)}`;

    if(expensesArr.length === 0 &  incomeArr.length === 0){
        containerTransactions.textContent = 'Transactions not found'
    }
}


/*-- Save transaction in LS --*/

function saveTransaction(type,transaction){
    if(type === 'income'){
        localStorage.setItem('incomes', JSON.stringify([...incomeArr,transaction]));
    }else{
        localStorage.setItem('expenses', JSON.stringify([...expensesArr,transaction]));
    }
}

/* Reset form */

function reset(){
    form.reset();
    while (containerTransactions.firstChild) {
        containerTransactions.removeChild(containerTransactions.firstChild);
      }
}

/* -- Event close icon --*/
containerTransactions.addEventListener('click', e => {
        if(e.target.className === 'fas fa-times'){
            let dataId= e.target.dataset.id;
            let type= e.target.dataset.type;
            deleteTransaction(dataId,type)
        }
})


/* -- Delete trasaction --*/

function deleteTransaction(id,type){
    if(type==='income'){
        let incomes = incomeArr.filter(income =>  income.id !== Number(id) )
        localStorage.setItem('incomes', JSON.stringify(incomes));
    } else{
        let expenses = expensesArr.filter(exp =>  exp.id !== Number(id) )
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
    reset();
    getTransactions();
    
    
}

getTransactions();
