import * as Styled from './ThingToDo.styles';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function ThingToDo({ header, desc, imgSrc, reversed }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Styled.ThingToDoWrapper inView={inView} ref={ref} reversed={reversed}>
      <Styled.ThingToDoTextWrapper>
        <Styled.ThingToDoHeader>{header}</Styled.ThingToDoHeader>
        <Styled.ThingToDoDescription>{desc}</Styled.ThingToDoDescription>
        <Styled.FindOutMore>Find out more</Styled.FindOutMore>
      </Styled.ThingToDoTextWrapper>
      <Styled.ImageWrapper>
        <Image src={imgSrc} height="550" width="550" />
      </Styled.ImageWrapper>
    </Styled.ThingToDoWrapper>
  );
}
