import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import * as action from "../actions/employees";

function HomeScreen() {
    const dispatch = useDispatch();
    const  data = useSelector(state=>(state.employees));
    const { loading,employees,error } = data;
    useEffect(()=>{
        dispatch(action.employees())
    },[]);
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1> 
    </div>
  )
}

export default HomeScreen
