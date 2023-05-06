import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Schedule a Test Drive"
        backgroundImg="model-3.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description="Schedule a Test Drive"
        backgroundImg="model-y.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model S"
        description="Schedule a Test Drive"
        backgroundImg="model-s.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model X"
        description="Schedule a Test Drive"
        backgroundImg="model-x.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

// tesla page scroll eft
const Container = styled.div` 
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;


