import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSavings, fetchSavings } from "../redux/actions";
import "../App.css"
import InputForm from "./InputForm";
function Savings() {
  const dispatch = useDispatch();
  const savings = useSelector((state) => state.savings);
  
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteSavings(id))
  }

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <div>
      <h1>Savings</h1>
      <InputForm saving={true}/>
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
          {savings.map((item) => (
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

export default Savings;
