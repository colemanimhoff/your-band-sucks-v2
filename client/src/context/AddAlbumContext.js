import { createContext } from 'react'

const addAlbumContext = createContext({
  album: {},
  setAlbum: (album) => { }
})

export default addAlbumContext