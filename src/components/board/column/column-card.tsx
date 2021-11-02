import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Card } from '../../store/board/index';
import { CardContainer } from '../card/index';

interface CardProps {
  card: Card;
}

export const ColumnCard: FC<CardProps> = ({ card }) => {
  const [activePopup, setActivePopup] = useState(false);

  const updateStatusPopup = (val: boolean) => {
    setActivePopup(val);
  };

  return (
    <>
      <ColCard onClick={() => setActivePopup(true)}>
        <div>{card.name}</div>
        <CountComments>
          Count of comments: {Object.keys(card.comments).length}
        </CountComments>
      </ColCard>
      {activePopup && (
        <CardContainer card={card} status={activePopup} change={updateStatusPopup} />
      )}
    </>
  );
};

const CountComments = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

const ColCard = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background: white;
  border: solid 1px lightgray;
  border-radius: 5px;
  cursor: pointer;
`;
