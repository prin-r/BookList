import React, { useRef, useMemo, useState } from 'react'
import { Flex } from 'rebass'
import { fs, ss } from '../utils/uilts'

export default ({ oid, ttt }) => {
  const [rBung, setRBung] = useState(true)
  const r = useRef(null)
  const x1 = useMemo(() => ss(8), [])
  const x2 = useMemo(() => ss(9), [])

  const text = fs[oid](ttt)
  return (
    <Flex px="20px" width="100%" pt="30px" flex={1} flexDirection="column">
      <Flex
        ref={r}
        style={{
          maxHeight: '30px',
          minHeight: '30px',
          color: `rgba(255,255,255,${rBung ? 0 : 1})`,
        }}
      >
        {text}
      </Flex>
      <Flex flexDirection="row" style={{ maxHeight: '30px' }}>
        <button onClick={() => navigator.clipboard.writeText(text)}>
          {x1}
        </button>
        <Flex mx="20px" />
        <button onClick={() => setRBung(!rBung)}>{x2}</button>
      </Flex>
    </Flex>
  )
}
