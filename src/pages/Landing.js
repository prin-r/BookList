import React from 'react'
import { Flex, Text } from 'rebass'
import { useBookContextState } from 'contexts/Book'
import A from 'components/A'

export default props => {
  const { setBookId, books } = useBookContextState()
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="black"
      style={{ minHeight: '100vh' }}
    >
      <Text my="30px" fontSize="24px" color="white">
        <A to="/wip">Book List</A>
      </Text>
      {books.map(book => (
        <Flex
          width="400px"
          px="20px"
          my="20px"
          onClick={() => setBookId(book.id)}
          style={{ cursor: 'pointer', maxWidth: window.innerWidth + 'px' }}
        >
          <A to="/reading">{book.name}</A>
        </Flex>
      ))}
    </Flex>
  )
}
