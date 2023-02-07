import * as Styled from './WhatToDo.styles';
import Image from 'next/image';
import ThingToDo from './ThingToDo/ThingToDo.component';

export default function WhatToDo() {
  return (
    <Styled.WhatToDoWrapper id="whatToDo-section">
      <ThingToDo
        header="Experience the arts"
        desc="Take in everything London has to offer culturally, from live music in Camden to the
            stage at the West End."
        imgSrc="/images/things-to-do/arts.png"
      />

      <ThingToDo
        header="See the sights"
        desc="Visit the landmarks that makes London so iconic."
        imgSrc="/images/things-to-do/landmarks.png"
        reversed
      />

      <ThingToDo
        header="Grab a bite"
        desc="Whether it's street food or fine dining, London has you covered."
        imgSrc="/images/things-to-do/food.png"
      />
    </Styled.WhatToDoWrapper>
  );
}
