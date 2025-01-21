export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const addToFavouritesAction = (job) => {
    return {
      type: ADD_TO_FAVOURITES,
      payload: job,
    }
  }

  export const removeFromFavouritesAction = (i) => {
    return {
      type: REMOVE_FROM_FAVOURITES,
      payload: i,
    }
  }