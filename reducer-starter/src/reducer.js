export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {...state, loading:true, catImage:'', error:''}
    case "SUCCESS":
      return {...state, catImage:action.payload, error:'', loading:false}
    case "FAIL":
      return{...state, error:action.payload, catImage:'', loading:false}
    default:
      break;
  }
};
