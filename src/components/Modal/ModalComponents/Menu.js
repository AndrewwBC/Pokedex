import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  place-self: start;
  width: 100%;
  background-color: #d7d7d7;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

const Content = styled.nav`
  display: flex;
  justify-content: center; ;
`;

const List = styled.ul`
  display: flex;
  place-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  gap: 1rem;
`;

const Option = styled.li`
  cursor: pointer;
  color: #202020;
  font-family: 'Poppins';
  font-size: 1rem;
`;

const Menu = ({ Options, setMenu }) => {
  return (
    <Container>
      <Content>
        <List>
          {Options.map((option, index) => (
            <Option
              id={index + 1}
              onClick={({ target }) => setMenu(target.id)}
              key={option}
            >
              {option}
            </Option>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Menu;
