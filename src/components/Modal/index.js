import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Menu from './ModalComponents/Menu';

import NameTypeID from './ModalComponents/NameTypeID';
import About from './ModalComponents/About';
import StatsBar from './ModalComponents/StatsBar';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  margin: 0 auto;
  position: absolute;
  z-index: 1000;
  height: 38rem;
  width: 24rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto 1fr;
  align-items: center;
  border-radius: 1rem;
  margin: 0 auto;
  background-color: white;
  &::before {
    content: 'Exp:${(props) => props.XP}';
    width: 1rem;
    letter-spacing: 1px;
    flex-wrap: nowrap;
    font-family: 'Lora';
    font-weight: 600;
    height: 1rem;
    font-size: 1rem;
    color: rgba(20, 20, 20, 0.5);
    top: 7rem;
    right: 6rem;
    position: absolute;
  }
  &::after {
    content: '#0${(props) => props.id}';
    width: 0.4rem;
    height: 0.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: rgba(20, 20, 20, 0.5);
    top: 4.8rem;
    right: 6rem;
    position: absolute;
  }

  @media (max-width: 768px) {
    height: 36rem;
    width: 26rem;
  }
  @media (max-width: 500px) {
    height: 32rem;
    width: 18rem;
  }
`;

const Img = styled.img`
  display: block;
  max-width: max-content;
  max-height: max-content;
  place-self: center;
  object-fit: cover;
`;

const MenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 264px;
  align-items: start;
  justify-items: center;
`;

const Modal = ({ modal, setModal, pokeID }) => {
  const [pokemon, setPokemon] = useState(false);
  const [pokeball, setPokeball] = useState(true);
  const [menu, setMenu] = useState(1);

  window.addEventListener('click', (e) => {
    if (e.target.id === 'close') {
      setModal(!modal);
    }
  });

  useEffect(() => {
    async function catchThemAll(pokeID) {
      if (pokeID) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`).then((response) =>
          response.json().then((response) => setPokemon(response)),
        );
      }
    }
    catchThemAll(pokeID);
  }, []);
  console.log(`Modal Render : ${pokemon}`);
  let { abilities, base_experience, height, stats, weight, types, forms } =
    pokemon;

  setTimeout(() => {
    setPokeball(false);
  }, 1000);

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

  if (pokemon) {
    return (
      <Container id="close">
        <Content
          id={pokeID}
          style={{ backgroundColor: `${colorsObj[types[0].type.name]}` }}
          XP={base_experience}
        >
          <NameTypeID pokeID={pokeID} types={types} forms={forms} />
          {pokeball === true ? (
            <Img
              width={50}
              height={50}
              src={`https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.webp`}
              alt=""
            />
          ) : (
            <Img
              src={`https://projectpokemon.org/images/normal-sprite/${forms[0].name}.gif`}
              alt=""
            />
          )}
          <Menu
            setMenu={setMenu}
            Options={['About', 'Base Stats', 'Evolution', 'Moves']}
          />
          <MenuContent>
            {menu == 1 && (
              <About
                pokeID={pokeID}
                height={height}
                weight={weight}
                abilities={abilities}
              />
            )}
            {menu == 2 && <StatsBar stats={stats} />}
          </MenuContent>
        </Content>
      </Container>
    );
  }
  return;
};

export default Modal;
