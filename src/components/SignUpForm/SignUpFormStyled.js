import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0%{ opacity: 0 }
    25%{ opacity: 0.25 }
    50%{ opacity: 0.50 }
    75%{ opacity: 0.75 }
    100%{ opacity: 1 }
`;

export const Container = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerBox = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 32px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 12px 20px 0 rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  background-color: #f2f2f2;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;

  & > h1 {
    text-align: center;
    margin: 20px 0;
  }

  @media screen and (max-width: 601px) {
    border-radius: none;
    box-shadow: none;
    background-color: inherit;
  }
`;

export const InputText = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
