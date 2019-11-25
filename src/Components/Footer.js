// Footer

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #333333;
  color: #f3f3f3;
  height: 13vh;
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
          NASA logo is a registered trademark of NASA 2019 © 
        </Text>
        <Text>Page designed by Jesus Rodriguez 2019 © </Text>
      </footer>
    </Container>
  );
};

export default Footer;