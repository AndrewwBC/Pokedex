import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../Card/';
import Modal from '../Modal';

const Container = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 4rem;
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  const [load, setLoad] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [modal, setModal] = useState(false);
  const [pokeID, setID] = useState('');

  useEffect(() => {
    for (let i = 1; i <= 60; i++) {
      setTimeout(() => {
        async function show() {
          const request = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`,
          ).then((response) =>
            response.json().then((response) => pokemon.push(response)),
          );
          if (i === 60) setLoad(!load);
        }
        show();
      }, 2000);
    }
  }, []);
  console.log(`Home Render : ${pokemon}`);
  function handleClick(target) {
    setID(target.id);
    setModal(!modal);
  }

  return (
    <>
      {modal && <Modal pokeID={pokeID} modal={modal} setModal={setModal} />}
      <Container>
        <>
          {load === false ? (
            pokemon.map(
              ({ forms, game_indices, types, pokemon_entries }, index) => (
                <Card
                  onClick={({ target }) => handleClick(target)}
                  setID={setID}
                  modal={modal}
                  setModal={setModal}
                  key={index}
                  name={forms[0].name}
                  types={types}
                  id={`${index}`}
                  img={`https://projectpokemon.org/images/normal-sprite/${forms[0].name}.gif`}
                />
              ),
            )
          ) : (
            <img
              style={{ placeSelf: 'center' }}
              alt="Pikachu"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTk4MTMwYTc2NDgyOTA5OTliOWRkNGMyZDI3ZjYyZjA1OTM2MTE5ZSZjdD1z/0MclkOoabuqXt5jcH6/giphy.gif"
            ></img>
          )}
        </>
      </Container>
    </>
  );
};

export default Home;
