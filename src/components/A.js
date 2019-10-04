import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${p => p.color || '#dedede'};
  transition: color 250ms;

  &:hover {
    color: ${p => p.hColor || 'white'};
  }
`
