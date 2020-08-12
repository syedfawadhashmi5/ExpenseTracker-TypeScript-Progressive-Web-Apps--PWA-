import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const NewTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newTransact = {
            id: Math.ceil(Math.random() * 9999),
            title,
            amount: +amount,
        }
        addTransaction(newTransact);
    }

    return (
        <div>
            
            <h3>Add Transaction</h3>

            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Deception</label>
                    <input
                    type="text"
                    name="title"
                    placeholder="Enter Deception..."
                    value={title}
                    required={true}
                    onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                    (negative - expense, positive - income)
                    </label >
                    <input
                    type="number"
                    name="amount"
                    value={amount}
                    placeholder="Enter amount..."
                    onChange={(e) => { setAmount(Number(e.target.value)) }}
                    />
                </div>

                <button
                    className="btn"
                    data-testid="submit-button">
                    Add transaction
               </button>
            </form>
        </div>
    )
}

export default NewTransaction