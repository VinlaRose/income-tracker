import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../redux/actions"; 
import "../App.css"

function InputForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("income"); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      // Handle validation or show an error message
      return;
    }

   
    if (category === "expense") {
        dispatch(addExpense({ description, amount, category }));
    } else if (category === "savings") {
        
    } else if (category === "income") {
      dispatch(addIncome({ description, amount, category }));
    }

    
    setDescription("");
    setAmount("");
  };

  return (
    
      
    <form className="input-container" onSubmit={handleSubmit}>
    <div className="input-row">
      <div className="input-group">
        <label>Description:</label>
        <input
          className="input-field"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Amount:</label>
        <input
          className="input-field"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Category:</label>
        <select
          className="input-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <div className="input-group">
        <button type="submit" className="submit-button">
          Add Entry
        </button>
      </div>
    </div>
  </form>
  
    
  );
}

export default InputForm;
