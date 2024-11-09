const elements = {
    expenseForm: document.getElementById('expenseForm'),
    expenseDescriptionInput: document.getElementById('expenseDescription'),
    expenseAmountInput: document.getElementById('expenseAmount'),
    expenseCategoryInput: document.getElementById('expenseCategory'),
    expenseList: document.getElementById('expenseList'),
    searchInput: document.getElementById('search'),
    sortBySelect: document.getElementById('sortBy')
};

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let totalExpenseAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
let expenseChart = null;

const formatCurrency = (amount) => amount.toLocaleString('vi-VN');

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const createExpenseItem = (expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <span>${expense.description} - <span class="expense-amount">${formatCurrency(expense.amount)} VND</span> - ${expense.category}</span>
            <div class="expense-date">${formatDate(new Date(expense.date))}</div>
        </div>
        <div class="btn-container">
            <button class="edit-btn" onclick="editExpense(${index})">Chỉnh sửa</button>
            <button class="delete-btn" onclick="deleteExpense(${index})">Xóa</button>
        </div>
    `;
    return li;
};

const displayExpenses = () => {
    elements.expenseList.innerHTML = '';
    if (expenses.length === 0) {
        elements.expenseList.innerHTML = '<li>No expenses added yet.</li>';
    } else {
        expenses.forEach((expense, index) => {
            elements.expenseList.appendChild(createExpenseItem(expense, index));
        });
    }
    displayCategoryTotals(); 
};

function updateTotalExpenseDisplay() {
    document.getElementById("totalExpenseAmount").textContent = formatCurrency(totalExpenseAmount) + " VND";
}

const displayCategoryTotals = () => {
    const categoryTotals = expenses.reduce((totals, expense) => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
        return totals;
    }, {});

    const categories = Object.keys(categoryTotals); 
    const amounts = Object.values(categoryTotals);   

    if (expenseChart) {
        expenseChart.destroy();
    }

    const ctx = document.getElementById('expenseChart').getContext('2d');
    expenseChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                label: 'Tổng Chi Tiêu',
                data: amounts, 
                backgroundColor: ['#FFB6B9', '#FAE3D9', '#BBDED6', '#8AC6D1', '#FFE156', '#6A4C93', '#F26B38'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true 
                },
                tooltip: {
                    enabled: true 
                }
            }
        }
    });
};


elements.expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = elements.expenseDescriptionInput.value.trim();
    const amount = parseFloat(elements.expenseAmountInput.value.trim());
    const category = elements.expenseCategoryInput.value;

    if (description && !isNaN(amount) && amount > 0) {
        const newExpense = {
            description,
            amount,
            category,
            date: new Date().toISOString(),
        };
        expenses.push(newExpense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        totalExpenseAmount += amount;  
        updateTotalExpenseDisplay();   
        displayExpenses();

        elements.expenseDescriptionInput.value = '';
        elements.expenseAmountInput.value = '';
    }
});

const deleteExpense = (index) => {
    totalExpenseAmount -= expenses[index].amount;
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotalExpenseDisplay(); 
    displayExpenses();
};

const editExpense = (index) => {
    const expense = expenses[index];
    elements.expenseDescriptionInput.value = expense.description;
    elements.expenseAmountInput.value = expense.amount;
    elements.expenseCategoryInput.value = expense.category;
    
    deleteExpense(index);
};

const filterExpenses = () => {
    const searchQuery = elements.searchInput.value.toLowerCase();
    const filteredExpenses = expenses.filter(expense =>
        expense.description.toLowerCase().includes(searchQuery)
    );
    displayFilteredExpenses(filteredExpenses);
};

const displayFilteredExpenses = (filteredExpenses) => {
    elements.expenseList.innerHTML = '';
    filteredExpenses.forEach((expense, index) => {
        elements.expenseList.appendChild(createExpenseItem(expense, index));
    });
};

const sortExpenses = () => {
    const sortBy = elements.sortBySelect.value;
    let sortedExpenses;

    if (sortBy === 'date_asc') {
        sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'date_desc') {
        sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'amount_asc') {
        sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);
    } else if (sortBy === 'amount_desc') {
        sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
    }

    expenses = sortedExpenses;
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
};

const clearAllExpenses = () => {
    expenses = [];
    totalExpenseAmount = 0;
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotalExpenseDisplay(); 
    displayExpenses();
};

updateTotalExpenseDisplay();
displayExpenses();
