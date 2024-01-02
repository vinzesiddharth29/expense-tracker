import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
    
    const titleText = props.title;
    console.log(props)
    const clickHandler = () => {
        titleText = "Updated!";
        console.log("working");
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>            
            <div className='expense-item__description'>
                <h3>{titleText}</h3>
                <div className='expense-item__price'>
                    <p>₹{props?.amount}</p>
                </div>
                <button onClick={clickHandler}>Click Me!</button>
            </div>
        </div>
        

    );
}
export default ExpenseItem;