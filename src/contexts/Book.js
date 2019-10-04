import React, { createContext, useContext, useState } from 'react'

const BookContext = createContext()
const books = [
  {
    name: 'Refactoring UI v1.0.2',
    id: '1ziUyzqXl2i2uHjrffMsA15iVtICmmf-5',
  },
  {
    name: 'Randomness Beacon',
    id: '1QemGPdGPw02cy9u7TabVMOJL03P0lWzC',
  },
  {
    name: 'Blockchain for Government Services',
    id: '1TTiNQgZ6gw16ESM_1-HUed3zLkadIPCB',
  },
  {
    name: 'Theory of Mechanism Design',
    id: '1wGd6NXLUxCCILag7BMJFolmrohv_U7FM',
  },
  {
    name: 'Introduction to Algorithms 3rd',
    id: '1UVNBFUa2n9XAgxgVJMll0qg3cLP4KemS',
  },
]

export const BookProvider = ({ children }) => {
  const [bookId, setBookId] = useState('')

  return (
    <BookContext.Provider value={{ bookId, setBookId, books }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContextState = () => useContext(BookContext)
