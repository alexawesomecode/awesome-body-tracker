const reducer = (state, action) => {
    if (action.type === 'SET_USER') {
        return {
            ...state,
            username: action.username
        };
    }
    return state;
};
export default reducer;