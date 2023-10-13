import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../redux/actions"; // Define action creators for adding data

function InputForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("income"); // Default category is "income"

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      // Handle validation or show an error message
      return;
    }

   
    if (category === "expense") {
     
    } else if (category === "savings") {
        
    } else if (category === "income") {
      dispatch(addIncome({ description, amount, category }));
    }

    // Clear the form after submission
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h2>Enter Income Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default InputForm;
