import { GET_DETAILS } from "../type";

const initialState={
  details: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
          return {
            datails: action.payload,
          };
          
            default:
            return state; 
    }
};

export default Reducer;

//13.52