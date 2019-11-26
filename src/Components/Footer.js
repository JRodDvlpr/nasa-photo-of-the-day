// Footer

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #232526;
  color: #fff;
  height: 80px;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;
  padding-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <footer>

        <Text>
          2019 © NASA. 
        </Text>
      </footer>
    </Container>
  );
};

export default Footer;