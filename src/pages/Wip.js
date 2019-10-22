import React, { useState, useMemo } from 'react'
import { Flex } from 'rebass'
import { ss } from '../utils/uilts'
import Sample from '../components/Sample'

const whenChange = (base, mimic, setBase, setMimic) => {
  setBase(base)
  setMimic(
    (mimic + ss(Math.max(0, base.length - mimic.length))).slice(0, base.length),
  )
}

export default () => {
  const [rBung, setRBung] = useState(true)
  const [curr, setCurr] = useState('')
  const [mm, setMM] = useState('')
  const bb = useMemo(() => ss(5), [])
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="black"
      style={{ height: '100vh' }}
    >
      <Flex mt="30px" flex={1} style={{ position: 'relative' }}>
        <input
          type="text"
          style={{
            color: `rgba(255,255,255,${rBung ? 0 : 1})`,
            borderRadius: '10px',
            paddingTop: '80px',
            outline: 'none',
            fontSize: '20px',
            minHeight: '120px',
            maxHeight: '120px',
            width: 'calc(100vw - 40px)',
          }}
          onChange={e => whenChange(e.target.value, mm, setCurr, setMM)}
        />
        <Flex
          style={{
            fontSize: '30px',
            color: 'white',
            position: 'absolute',
            top: '45px',
            left: '20px',
          }}
        >
          {mm}
        </Flex>
        <Flex
          style={{
            fontSize: '30px',
            color: 'white',
            position: 'absolute',
            top: '45px',
            right: '20px',
          }}
        >
          <button onClick={() => setRBung(!rBung)}>{bb}</button>
        </Flex>
      </Flex>
      <Sample oid={0} ttt={curr} />
      <Sample oid={1} ttt={curr} />
      <Sample oid={2} ttt={curr} />
    </Flex>
  )
}
