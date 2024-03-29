
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  function addNewExpense(enteredData){
      const data = {
        ...enteredData,
        id: 1
      } ;
      console.log(data); 
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onNewExpense={addNewExpense}></NewExpense>
      {
        expenses.map((expense) => {
          return <ExpenseItem title={expense.title} date={expense.date} price={expense.price}></ExpenseItem>
        })
      }  
    </div>
    
  );
}

export default App;
