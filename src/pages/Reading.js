import React, { useRef, useState } from 'react'
import { Flex } from 'rebass'
import { useBookContextState } from 'contexts/Book'
import A from 'components/A'

export default () => {
  const { bookId } = useBookContextState()
  const slideBar = useRef()
  const [brightness, setBrightness] = useState(0.5)
  return (
    <Flex flexDirection="column" alignItems="center" bg="black">
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{
          zIndex: '2',
          position: 'relative',
          height: '30px',
          color: '#888888',
          cursor: 'pointer',
        }}
      >
        <A to="/">Back</A>
      </Flex>
      <Flex
        ref={slideBar}
        width="100%"
        bg="#4a4a4a"
        style={{
          zIndex: '1',
          position: 'relative',
          height: '30px',
          cursor: 'pointer',
        }}
        onClick={e => setBrightness(e.pageX / window.innerWidth)}
      >
        <Flex
          bg="#888888"
          style={{
            left: Math.round(brightness * window.innerWidth) + 'px',
            minWidth: '30px',
            minHeight: '30px',
            borderRadius: '50%',
            position: 'absolute',
            transform: 'translateX(-15px)',
          }}
        />
      </Flex>
      <Flex
        bg={`rgba(0,0,0,${1 - brightness})`}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <Flex
        bg="rgba(0,0,0,1)"
        style={{
          position: 'fixed',
          width: '100%',
          height: '60px',
          pointerEvents: 'none',
        }}
      />
      <Flex
        bg="black"
        style={{
          position: 'fixed',
          width: '10%',
          height: '100vh',
          left: '0px',
        }}
      />
      <Flex
        disabled={true}
        bg="black"
        style={{
          position: 'fixed',
          width: '10%',
          height: '100vh',
          right: '0px',
        }}
      />
      <iframe
        style={{ background: 'black' }}
        src={`https://drive.google.com/file/d/${bookId}/preview`}
        width="100%"
        height={window.innerHeight + 'px'}
      />
    </Flex>
  )
}
