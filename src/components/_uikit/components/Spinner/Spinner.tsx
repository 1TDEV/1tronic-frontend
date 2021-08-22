import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  0% { transform: translate(0,0) }
  50% { transform: translate(80px,0) }
  100% { transform: translate(0,0) }
`;
const rotateO = keyframes`
  0%    { opacity: 1; transform: translate(0 0) }
  49.99% { opacity: 1; transform: translate(80px,0) }
  50%    { opacity: 0; transform: translate(80px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
`;

const Container = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  position: relative;
`;

const SpinnerContent = styled.div<{size}>`
  width:  ${({ size }) => (size)}px;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
  div {
    box-sizing: content-box;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
  }
  div:nth-child(1) {
    background: #fff700;
    animation: ${rotate} 1s linear infinite;
    animation-delay: -0.5s;
  }
  div:nth-child(2) {
    background: #fe4101;
    animation: ${rotate} 1s linear infinite;
    animation-delay: 0s;
  }
  div:nth-child(3) {
    background: #fff700;
    animation: ${rotateO} 1s linear infinite;
    animation-delay: -0.5s;
  }
`;
const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <SpinnerContent size={size}>
        <div/>
        <div/>
        <div/>
      </SpinnerContent>
    </Container>
  );
};

export default Spinner;
