import React from 'react';
import { Footer, Wrapper, Content } from './Layout.styles';
import Navbar from '../navbar/Navbar';

function MyComponent({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        {children}
      </Content>
      <Footer>
        <p>Lorem ipsum dolor sit.</p>
      </Footer>
    </Wrapper>
  );
}

export default MyComponent;
