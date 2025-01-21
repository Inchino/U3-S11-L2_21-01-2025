const initialState = {
    favourite:{
        list:[],
    },
}

const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVOURITE':
        return{
            ...state,
            favourite:{
                ...state.favourite,
                list: state.favourite.list.concat(action.payload),
            },
        }
        case 'REMOVE_FROM_FAVOURITE':
        return {
            ...state,
            favourite: {
              ...state.favourite,
              list: state.favourite.list.filter((job, i) => {
                if (action.payload === i) {
                  return false
                } else {
                  return true
                }
              }),
            },
          }
    
        default:
        return state;
    }
}

export default mainReducer;