import  {GET_DETAILS}  from "../type";
import GetApiDetails from "../../api/axiosRequest";

const Action = () => {
   return function (dispatch) {
      return GetApiDetails().then((res) => {
         console.log("Response Data is _______________", res)
         dispatch({
            type: GET_DETAILS,
            payload: res.data,
         }); 
      });
   };
};

export default Action;