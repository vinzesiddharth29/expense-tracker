import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
    
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('updated!');
        
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>            
            <div className='expense-item__description'>
                <h3>{title}</h3>
                <div className='expense-item__price'>
                    <p>₹{props.amount}</p>
                </div>
                <button onClick={clickHandler}>Click Me!</button>
            </div>
        </div>
        

    );
}
export default ExpenseItem;