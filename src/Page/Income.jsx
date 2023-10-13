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
      <InputForm/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Created At</th>
            {/* Add additional headers as needed */}
          </tr>
        </thead>
        <tbody>
          {income.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>{item.createdAt}</td>
              <td><button onClick={() => deleteHandler(item._id)}>DELETE</button></td>
              {/* Add additional data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Income;
