import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1.2rem 0 0.4rem 0;
  border-radius: 1rem;
  display: grid;
  min-width: 300px;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    scale: calc(1.05);
  }
  &::before {
    content: '  ';
    width: 8px;
    height: 8px;
    border-radius: 122px;
    background: inital;
    box-shadow: 3px 3px 60px #f9f9f9, 2px 2px 6px #303030;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
  &::after {
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 122px;
    background: inital;
    box-shadow: 3px 3px 60px #f9f9f9, 2px 2px 6px #303030;
    position: absolute;
    top: 0.4rem;
    left: 2rem;
  }
`;

const Img = styled.img`
  width: max-content;
  height: max-content;
  margin-top: -1.6rem;
  object-fit: cover;
  display: block;
  position: relative;
`;

const TypeCont = styled.div`
  display: flex;
  gap: 1rem;
  grid-row: 3;
`;

const Id = styled.p`
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 1rem;
`;

const Desc = styled.div`
  display: flex;
  padding: 0.5rem 0rem 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  position: relative;
`;

const Name = styled.p`
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  font-family: 'Poppins';
  letter-spacing: 0.6px;
  position: relative;
  border-radius: 82px;
  background: initial;
  box-shadow: 1px 1px 2px #202020, -1px -1px 2px #404040;
`;

const Type = styled.p`
  padding: 0.1rem 0.8rem;
  border-radius: 2rem;
  font-size: 1rem;
  color: #f5f5f5;
  max-width: max-content;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 82px;
  background: initial;
  box-shadow: 1px 1px 2px #202020, -1px -1px 2px #404040;
`;

const Cards = ({ name, img, types, id, setModal, modal, setID, onClick }) => {
  let upper = name.charAt(0).toUpperCase();
  let rest = name.slice(1, name.length);
  let result = upper + rest;

  const colorsObj = {
    water: '#27A4F3',
    fire: '#D75656',
    ground: '#E2BF65',
    grass: '#4CA459',
    bug: '#9469CD',
    normal: '#c9c9c9',
    electric: '#F7D02D',
    poison: '#A33EA1',
    fairy: '#D685AD',
    dragon: '#6F35FC',
    ghost: '#735797',
    psychic: '#F95587',
    fighting: '#C22E28',
  };

  return (
    <>
      <Card
        id={+id + 1}
        onClick={onClick}
        style={{ backgroundColor: colorsObj[types[0].type.name] }}
      >
        <Desc id={+id + 1}>
          <Name id={+id + 1}>{result}</Name>
          <TypeCont id={'#0' + id + 1}>
            {types.map((type, index) => (
              <Type key={index}>{type.type.name}</Type>
            ))}
          </TypeCont>
        </Desc>
        <Id id={+id + 1}>#{+id + 1}</Id>
        <Img id={+id + 1} src={img} alt={result} />
      </Card>
    </>
  );
};

export default Cards;
