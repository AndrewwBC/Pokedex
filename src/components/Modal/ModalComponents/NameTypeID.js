import React from 'react';
import styled from 'styled-components';

const NameContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-left: 2rem;
  place-self: start;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  position: relative;
`;

const Types = styled.div`
  display: flex;
  gap: 2rem;
`;

const Type = styled.p`
  color: #fff;
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
  font-family: 'Roboto';
  letter-spacing: 1px;
  background-color: #404040;
  box-shadow: 1px 1px 2px #202020, -1px -1px 2px #404040;
  border-radius: 0.6rem;
`;

const Name = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.2rem 0.4rem;
  font-family: 'Poppins' !important;
  letter-spacing: 1px;
  background-color: #303030;
  box-shadow: 1px 1px 4px #202020, -1px -1px 4px #404040;
  border-radius: 0.6rem;
`;

const NameTypeID = ({ pokeID, types, forms }) => {
  let upper = forms[0].name.charAt(0).toUpperCase();
  let rest = forms[0].name.slice(1, forms[0].name.length);
  let result = upper + rest;

  return (
    <NameContainer id={pokeID}>
      <Name>{result}</Name>
      <Types>
        {types.map((type, index) => (
          <Type key={index}>{type.type.name}</Type>
        ))}
      </Types>
    </NameContainer>
  );
};

export default NameTypeID;
