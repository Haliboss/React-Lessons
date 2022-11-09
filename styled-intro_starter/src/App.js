import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";

const App = () => {
  return (
    <>
      <Container bg='grey'>
        <HeaderText color='hotpink'>STYLED COMPONENTS</HeaderText>
        <Button primary>Click</Button>
        <Button>Save</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
    </>
  );
};

export default App;
