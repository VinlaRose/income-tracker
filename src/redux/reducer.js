const initialState = {
    income: [],
    expenses: [],
    savings: [],
    loading: false,
    error: null,
  };
  
  const financeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_INCOME_SUCCESS':
        return {
          ...state,
          income: action.payload,
          loading: false,
          error: null,
        };
  
      case 'FETCH_INCOME_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error fetching income data',
        };
  
      case 'FETCH_DATA_LOADING':
        return {
          ...state,
          loading: true,
        };
  
      case 'ADD_INCOME_SUCCESS':
        return {
          ...state,
          income: [...state.income, action.payload],
          loading: false,
          error: null,
        };
  
      case 'ADD_INCOME_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error adding income',
        };
        
        case 'DELETE_INCOME_SUCCESS':
            
            const updatedIncome = state.income.filter((income) => income._id !== action.payload._id);
            return {
              ...state,
              income: updatedIncome,
              loading: false,
              error: null,
            };
      
          case 'DELETE_INCOME_FAILURE':
            return {
              ...state,
              loading: false,
              error: 'Error deleting income',
            };
  
      default:
        return state;
    }
  };
  
  export default financeReducer;
  