import axios from "axios";

export const employees=()=>{
    return async(dispatch)=>{
        dispatch({type:"GET_EMP",loading:true})
        try {
            const {data} =await axios.get("http://localhost:8080/getEmployees");
            dispatch({type:"GET_EMP_SUC",loading:false,value:data}) ;
        } catch (error) {
            dispatch({type:"GET_EMP_FAIL",loading:false,error:error.message}) ;
        }
    };
};
