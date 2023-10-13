
export const fetchIncome = () => async (dispatch) => {
    try {
      //   dispatch({ type: 'FETCH_DATA_LOADING' })
      const response = await fetch(
        'https://expense-tracker.vinlarose.repl.co/income'
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_INCOME_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching income data:', error);
      dispatch({ type: 'FETCH_INCOME_FAILURE' }); // Correct the action type
    }
  };

  export const addIncome = (incomeData) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'ADD_INCOME_LOADING' });
      console.log(incomeData)
  
      const response = await fetch('https://expense-tracker.vinlarose.repl.co/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incomeData),
      });
  
      if (!response.ok) {
        // Handle non-successful response (e.g., status code 4xx or 5xx)
        throw new Error('Failed to add income');
      }
  
      const addedIncome = await response.json();
      console.log(addedIncome.data)
      dispatch({ type: 'ADD_INCOME_SUCCESS', payload: addedIncome.data });
    } catch (error) {
      console.error('Error adding income:', error);
      dispatch({ type: 'ADD_INCOME_FAILURE' });
    }
  };
  
  export const deleteIncome = (incomeId) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'DELETE_INCOME_LOADING' });
      console.log(incomeId);
  
      const response = await fetch(`https://expense-tracker.vinlarose.repl.co/income/${incomeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        // Handle non-successful response (e.g., status code 4xx or 5xx)
        throw new Error('Failed to delete income');
      }
  
      const deletedIncome = await response.json();
      console.log(deletedIncome.data);
      dispatch({ type: 'DELETE_INCOME_SUCCESS', payload: deletedIncome.data });
    } catch (error) {
      console.error('Error deleting income:', error);
      dispatch({ type: 'DELETE_INCOME_FAILURE' });
    }
  };
  
  
 