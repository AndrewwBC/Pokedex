import React from 'react';
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

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin-bottom: 0.6rem;
  align-items: center;
  //Green rgba(0, 255, 68, 1)
  // Red rgba(220,0,0,1)
  &::after {
    content: ' ';
    background: rgb(0, 255, 68);
    background: linear-gradient(
      90deg,
      rgba(0, 255, 68, 1) ${(props) => props.color + '%'},
      rgba(159, 140, 137, 0.6783088235294117) ${(props) => props.color + '%'}
    );
    border-radius: 1rem;
    height: 6px;
  }
  //Red
`;

const Atribute = styled.span`
  font-size: 1rem;
  font-family: 'Poppins';
  color: #a9a9a9;
`;

const Value = styled.p`
  font-size: 1rem;
  font-family: 'Poppins';
  color: #202020;
`;

const StatsBar = ({ stats }) => {
  return (
    <Container>
      <Content>
        <>
          <Stats color={`${stats[0].base_stat}`}>
            <Atribute>HP</Atribute>
            <Value>{stats[0].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[1].base_stat}`}>
            <Atribute>Attack</Atribute>
            <Value>{stats[1].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[2].base_stat}`}>
            <Atribute>Defense</Atribute>
            <Value>{stats[2].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[3].base_stat}`}>
            <Atribute>Sp. Atk</Atribute>
            <Value>{stats[3].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[4].base_stat}`}>
            <Atribute>Sp. Def</Atribute>
            <Value>{stats[4].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[5].base_stat}`}>
            <Atribute>Speed</Atribute>
            <Value>{stats[5].base_stat}</Value>
          </Stats>
          <Stats color={`${stats[5].base_stat}`}>
            <Atribute>Total</Atribute>
            <Value>
              {stats.reduce((acc, atual) => {
                return (acc += atual.base_stat);
              }, 0)}
            </Value>
          </Stats>
        </>
      </Content>
    </Container>
  );
};

export default StatsBar;
