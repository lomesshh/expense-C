const displayValue = document.querySelector("#disvalue");
const iptAmt = document.querySelector("#inputAmount");
const iptDesc = document.querySelector("#inputDesc");
const expenseTableEl = document.querySelector("#expenseTable");

let totalExpense = 0;

displayValue.textContent = totalExpense;

const allExpense = [];

function addExpencseToTotal(){

    const expense = {};
    const iptvalue = iptAmt.value;
    const iptdescription =iptDesc.value;
    console.log({ iptvalue, iptdescription })

    expense.Description = iptdescription;
    expense.Amount = iptvalue;
    expense.moment = new Date(); 

    allExpense.push(expense);

    const convert = parseInt(iptvalue, 10);

    totalExpense = totalExpense + convert;

    const someText = `Total : ${totalExpense}`
    displayValue.textContent = someText;

    // const data1 = allExpense[0];
    // const data2 = allExpense[1];

    // const data1Text = `Expense : ${data1.Amount} :: ${data1.Description}`
    // const data2Text = `Expense : ${data2.Amount} :: ${data2.Description}`

    // const tableText =`
    //     <div>${data1Text}</div>
    //     <div>${data2Text}</div>
    
    // `

   renderList(allExpense);
}




const btnCounter = document.querySelector("#btnAddExpense");

btnCounter.addEventListener("click", addExpencseToTotal, false);

function getDataString(momento) {
    return momento.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })
}

function deleteItem(dateValue) {
    // const newArr = [];            
    // for (let i = 0; i < allExpense.length; i++){
    //     if(allExpense[i].moment.valueOf() !== dateValue)
    //     {
    //         newArr.push(allExpense[i]);
    //     }
    // }

        const newArr =allExpense
            .filter(expense => expense.moment.valueOf() !== dateValue)
        renderList(newArr);

    }  


    function renderList(arrOfList){
        const allExpenseHTML = arrOfList.map(expense => createTableList(expense));
        const allExpenseHTMJoin = allExpenseHTML.join('');
        expenseTableEl.innerHTML = allExpenseHTMJoin;

    }

function createTableList({ Description, Amount, moment })  {

    return `
        
        <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex flex-column">
                           ${Description}
                        <small class="text-muted">${getDataString(moment)}</small>
                    </div>
                    <div>
                        <span class="px-5">
                            ${Amount}
                        </span>
                        <button class="btn btn-outline-info btn-sm">
                        <lord-icon
                        src="https://cdn.lordicon.com/slkvcfos.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#121331,secondary:#08a88a"
                        style="width:32px;height:32px">
                    </lord-icon>
                        </button>   
                    </div>
                </li>
        
        `;
}
