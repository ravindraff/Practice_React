import axios from "axios";

export const getDetailsEmp = (id) => {
    return async (dispatch) => {
        dispatch({
            type: "GET_DET_EMP",
            loading: true
        });
        try {
            const {
                data
            } = axios.get(`http://localhost:8080/employee/${id}`);
            dispatch({
                type: "GET_DET_EMP_SUC",
                loading: false,
                value: data
            });

        } catch (error) {
            dispatch({
                type: "GET_DET_EMP_FAIL",
                loading: false,
                error: error.message
            });

        }
    };

};