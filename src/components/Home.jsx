import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
   
    position: relative;
    overflow: hidden;

`




const Wrapper = styled.div`
    height:100%;
    display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
`
//   <--- Start image  --!>

const ImgContainer = styled.div`
    height: 100%;
    flex:1;

`
const Image = styled.img`
margin-top:10px;
height: 90%;
width: 214%;


`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    

`
const Title = styled.h1`
    font-size: 70px;
    position: absolute;
    top:10%;
    right: 16px;

`
const Desc = styled.p`
    margin: 50px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    position: absolute;
    top:22%;
    right: 5px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius:10px;
    background-color: black;
    color:white;
    cursor:pointer;
    position: absolute;
    top:38%;
    right: 12%;


`
const Home =() => {
   



  return (
   <Container>
      

       <Wrapper>
           <Slide>
            <ImgContainer>
                <Image src='assets/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg'/>
            </ImgContainer>


            <InfoContainer>
            <Title>Summer Sale </Title>
            <Desc> Get 40% off your first purchase.</Desc>
            <Link to ="/products">
            <Button>Shop Now</Button>
            </Link>


            </InfoContainer>
            </Slide>
           
           
            
       </Wrapper>
      

   </Container>
  )
}

export default Home