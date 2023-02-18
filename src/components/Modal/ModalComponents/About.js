import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2.4rem 0.2rem 2.4rem;
  padding: 0 0.2rem;
`;

const Flex = styled.div`
  display: grid;
  word-break: normal;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 0.3rem 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const Aspect = styled.p`
  font-size: 1rem;
  font-family: 'Poppins';
  color: #a1a1a1;
`;

const Value = styled.span`
  display: inline;
  color: #202020;
  font-family: 'Poppins';
  font-size: 1rem;
`;

const Breed = styled.h2`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  color: #202020;
  font-family: 'Lora';
  place-self: start;
`;

const BreedContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1rem;
`;

const Egg = styled.p`
  font-family: 'Lora';
  font-weight: 600;
`;

const About = ({ pokeID, height, weight, abilities }) => {
  const [eggs, setEggs] = useState(false);
  const [load, setLoad] = useState(true);
  let upEgg = [];

  useEffect(() => {
    show();
  }, [pokeID]);

  async function show() {
    try {
      let req = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeID}/`,
      );
      let r = await req.json();
      setLoad(true);
      setEggs(r);
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  }

  if (eggs) {
    eggs.egg_groups.map((egg) => {
      let upper = egg.name.charAt(0).toUpperCase();
      let rest = egg.name.slice(1, egg.name.length);
      let result = upper + rest;
      upEgg.push(result);
    });
  }
  console.log(upEgg);
  if (load) return <Container></Container>;
  if (eggs) {
    return (
      <Container>
        <Content>
          <Flex>
            <Aspect>Genera</Aspect>
            <Value>{eggs.genera[7].genus}</Value>
          </Flex>
          <Flex>
            <Aspect>Height</Aspect>
            <Value>{height + ' cm'}</Value>
          </Flex>
          <Flex>
            <Aspect>Weight</Aspect>
            <Value>{weight + ' gm'}</Value>
          </Flex>
          <Flex>
            <Aspect>Abilities</Aspect>
            <div>
              {abilities.map((abil, index) => (
                <Value key={index}>{abil.ability.name + ' '}</Value>
              ))}
            </div>
          </Flex>
          <Breed>Breeding</Breed>
          <BreedContent>
            <Aspect>Egg Groups</Aspect>
            {upEgg.map((egg) => (
              <Egg>{egg + '  '}</Egg>
            ))}
          </BreedContent>
        </Content>
      </Container>
    );
  }
};

export default About;
