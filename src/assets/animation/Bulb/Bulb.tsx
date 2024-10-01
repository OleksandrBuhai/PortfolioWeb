import React from "react";
import styled, { keyframes } from "styled-components";
import bulb from "/img/animatedImg/bulb.png";
import Image from "next/image";

const pulseAnimation = keyframes`
  0% {
    filter: brightness(90%);
  }
  50% {
    filter: brightness(110%);
  }
  100% {
    filter: brightness(90%);
  }
`;

const BulbContainer = styled.div`
  width: 200px;
  height: auto;
  max-width: 100%;
  position: absolute;
  left: -10px;
  bottom: -60px;
  padding: -50px;
  transform: rotate(45deg);
  animation: ${pulseAnimation} 2s infinite;
  z-index: 0;

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const Bulb = () => {
  return (
    <BulbContainer>
      <Image
        src="/img/animatedImg/bulb.png"
        alt={""}
        width={260}
        height={300}
      />
    </BulbContainer>
  );
};

export default Bulb;
