import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ bg }) => bg || "white"};
`;

export default Container;
