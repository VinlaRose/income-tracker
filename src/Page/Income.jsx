import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome, fetchIncome } from "../redux/actions";
import "../App.css"
import InputForm from "./InputForm";
function Income() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteIncome(id))
  }

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div>
      <h1>Income</h1>
      <InputForm income={true}/>
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
          {income.map((item) => (
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

export default Income;
