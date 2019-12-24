import React from 'react'
import styled from 'styled-components'

const BottomBarContainer = styled.div`
  color: inherit;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
`
const BottomBar = () => {
  return (
    <BottomBarContainer>
      <a href="https://github.com/cieltan/golden-ktv">
        CHECK OUT OUR SOURCE CODE.
      </a>
    </BottomBarContainer>
  )
}

export default BottomBar
