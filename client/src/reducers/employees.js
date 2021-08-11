const initialState = {
    loading: false,
    employees: [],
    error: false,
};

const employees = (state = initialState, action) => {
    switch (action.type) {
        case "GET_EMP":
            return {
                ...state,
                loading: action.loading,

            };
        case "GET_EMP_SUC":
            return {
                ...state,
                loading: action.loading,
                    employees: action.value
            };
        case "GET_EMP_FAIL":
            return {
                ...state,
                loading: action.loading,
                    error: action.error,
            }
            default:
                return state;
    }
};
export default employees;