import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  font-size: 50px;
`;

export default function Home() {
  return <Container>Welcome Movielist!!</Container>;
}
