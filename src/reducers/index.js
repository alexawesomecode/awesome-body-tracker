const reducer = (state, action) => {
    console.log(action, 'this action')
    if (action.type == 'SET_USER') {
        console.log(action.type, 'dentro de reducer')
        return Object.assign({}, state, {username: action.username})
    }
    return state;
}

export default reducer;