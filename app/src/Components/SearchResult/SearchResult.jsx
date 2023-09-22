import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../App';
import { Button } from '../../App';
import { Container } from '../../App';
const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
     <Container>
     <FoodCards>
        {data?.map(({name,image,text,price}) => (
          <Foodcard key={name}>
            <div className='image_container'>
              <img src={BASE_URL+ image} alt="" />
            </div>
            <div className="food_info">
                <div className="info">
                    <h3>{name}</h3>
                    <p>
                        {text}
                    </p>
                </div>
                    <Button> ${price.toFixed(2)} </Button>
            </div>
          </Foodcard>
        ))}
      </FoodCards>
     </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
 min-height: calc(100vh - 175px);
`;

const FoodCards = styled.div`
display:flex;
flex-wrap:wrap;
column-gap:20px;
row-gap:32px;
padding-top:30px;
align-items:center;
justify-content:center;

`;
const Foodcard = styled.div`
width: 320px;
height: 150px;
flex-shrink: 0;
border-radius: 20px;
border: 0.659px solid #98F9FF;
background: url(png), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
display:flex;
padding:0 8px;
.food_info{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:end;
    h3{
        font-size:16px;
        font-weight:500;
        margin-top:8px;
    }
    p{
        font-size:12px;
        margin-top:4px;

    }
    Button{
        font-size:12px;
    }
}

`;
