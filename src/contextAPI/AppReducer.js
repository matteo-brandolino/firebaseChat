
export default (state,action) =>{
    switch(action.type){
        case 'SET_MESSAGES':
            return{
                ...state,
                messages: action.payload,
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.payload,
            }
        default:
            throw new Error('Action type is not implemented!')
    }
}
