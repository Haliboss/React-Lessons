import styled from "styled-components";

export const Button = styled.button`
  //background-color: hotpink;
  //color: white;
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  color: ${({ primary }) => (primary ? "purple" : "white")};
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: pink;
  font-family: "Segoe UI", Tahoma;
  font-size: 1.1rem;
  &:hover {
    transform: scale(0.95);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
`;
