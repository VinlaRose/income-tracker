import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, fetchExpense } from "../redux/actions";
import "../App.css"
import InputForm from "./InputForm";
function Expense() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteExpense(id))
  }

  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);

  return (
    <div>
      <h1>Expenses</h1>
      <InputForm expense={true}/>
      <table>
        <thead>
          <tr>
            
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Delete</th>
           
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item._id}>
              
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.createdAt}</td>
              <td><button onClick={() => deleteHandler(item._id)}>DELETE</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expense;
