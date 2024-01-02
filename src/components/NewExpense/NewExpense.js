import React, { useState } from "react";
import './NewExpense.css';
function NewExpense(){
    let [enteredTitle, setTitle] = useState('');
    let [enteredPrice, setPrice] = useState('');
    let [enteredDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function priceChangeHandler(event){
        setPrice(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function formSubmitHandler(event){
        
        event.preventDefault();
        const data = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        };
        console.log(data);
        setTitle('');
        setPrice('');
        setDate('');
    }

    return(
        <div className="new-expense">
            <form onSubmit={formSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onInput={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input type="number" value={enteredPrice} onInput={priceChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} onInput={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    )
}
export default NewExpense;