import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import HeaderLinks from '../components/HeaderLinks'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import CategoryItem from '../components/CategoryItem';


const Container = styled.div`


`

const Wrapper = styled.div`
padding: 50px;
display: flex;


`
const ImgContainer = styled.div`
flex:1 ;


`
const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: cover;

`
const InfoContainer = styled.div`
flex:1;
padding : 0px 15px;

`
const Title = styled.h1`
font-weight: 200;
display: flex;
 justify-content: center;
 align-items: center;

`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
 display: flex;
 justify-content: center;
 align-items: center;

`

const AddContainer = styled.div`
  width: 50%;
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #ffe0b3;
  }
`;





const SingleProductPage = ({item}) => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <HeaderLinks/>
        <Wrapper>
          <ImgContainer>
          <Image src="assets/axel-antas-bergkvist-XUdIi04ohps-unsplash.jpg"/>
          </ImgContainer>

          <InfoContainer>
            <Title> Donda</Title>
            <Desc>2wodhwwowowwowdooehcoehcoehcoehcoehcoehoehcoehcoehcoehcoehcoehcoecoecoeocencjence
              edwhediehiewhiw2hihiidi2gdiwdg2di2gdiw2idgw2igdw wdwdw d2wdw dwd wdw dwud wdd wud dvd. hahahahahaha
              hvhwvhwdwduwdwjwywbibbww
              wdwbdhwbdbwdbwd
              wdwdwduwd
              whdwdwdyuwbd
              wdwbdhwbdbwdbwdwdwuduwduwd

              wvduwduwbdwdiw
              i3gdigdigd

              2idg2id2idi2d2
            </Desc>
            <Price>$ 20.00</Price>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button> Add to Cart</Button>
            </AddContainer>
            
          </InfoContainer>

        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default SingleProductPage