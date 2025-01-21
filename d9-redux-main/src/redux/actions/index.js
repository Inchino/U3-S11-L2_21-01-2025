export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const addToFavouritesAction = (job) => {
    return {
      type: ADD_TO_FAVOURITE,
      payload: job,
    }
  }

  export const removeFromFavouritesAction = (i) => {
    return {
      type: REMOVE_FROM_FAVOURITE,
      payload: i,
    }
  }