import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
color: black;

`
const Line1 = styled.hr`
  color: black;
  margin-top:60px;
  
`;

const Items = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
   

`

const Menuitem = styled.div`
 font-style: 14px;
 cursor: pointer;
 margin-left: 45px;
 padding-right:55px;
`

const Line2 = styled.hr`
  color: black;
  margin-top:10px;
  
`;



const HeaderLinks = () => {
  return (
    <Container>

       <Line1/>
       <Items>
       <Menuitem>HOME</Menuitem>
       <Menuitem>SHOP</Menuitem>
       <Menuitem>ABOUT</Menuitem>
       <Menuitem>CONTACT</Menuitem>
       </Items>
       <Line2/>
    </Container>
  )
}

export default HeaderLinks