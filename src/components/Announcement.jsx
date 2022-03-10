import React from 'react'
import styled from 'styled-components'

const Container =styled.div`

    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>

        40% Off your first Order !!
    </Container>
  )
}

export default Announcement