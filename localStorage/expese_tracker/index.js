document.addEventListener('DOMContentLoaded',()=> {
    const expenseForm= document.getElementById('expense-form');
    const expenseName=document.getElementById('expense-name');
    const amount= document.getElementById('amount');
    const category=document.getElementById('category');
    const expenseList= document.getElementById('expense-list');
    const totalAmount= document.getElementById('total-amount');

    let expenses= JSON.parse(localStorage.getItem('expenses'))||[];
    let editIndex=-1;
    const updateExpenses=()=> {
        expenseList.innerHTML='';
        let total=0;
        expenses.forEach((expense,index)=>{
            const li= document.createElement('li');
            li.className='list-group-item';
            li.innerHTML=`<div class="expense details"
            <span>${expense.name}</span>
            <span>RS${expense.amount}</span>
            <span>${expense.category}</span>
            </div>
            <button class="btn btn-warning btn-sm edit-expense" data-index="${index}">Edit</button>
            <button class="btn btn-danger btn-sm delete-expense" data-index=${index}">Delete</button>
        `
            expenseList.appendChild(li);
            total+=parseFloat(expense.amount);
        });
        totalAmount.textContent=total.toFixed(2);
        localStorage.setItem('expenses',JSON.stringify(expenses));
    };
    expenseForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const newExpense={
            name:expenseName.value,
            amount:amount.value,
            category:category.value

        };
        if(editIndex===-1){
            expenses.push(newExpense);
        }else{
            expenses[editIndex]= newExpense;
            editIndex=-1;
        }
        updateExpenses();
        expenseForm.reset();
    } );
    expenseList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete-expense')){
            const index= e.target.dataset.index;
            expenses.splice(index,1);
            updateExpenses();
        }
        if(e.target.classList.contains('edit-expense')){
            const index=e.target.dataset.index;
            const expense= expenses[index];
            expenseName.value=expense.name;
            amount.value= expense.amount;
            category.value=expense.category;
            editIndex=index;
        }
    });
    updateExpenses();
});