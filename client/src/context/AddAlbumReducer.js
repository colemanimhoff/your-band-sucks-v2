import { SET_ALBUM } from './Types'

const setAlbum = (album, state) => {
  return {
    ...state,
    album: album
  }
}

export default (state, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return setAlbum(action.payload, state)
    default:
      return state
  }
}