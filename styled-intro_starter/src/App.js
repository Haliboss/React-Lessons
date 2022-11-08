import { Button, TomatoButton } from "./components/Button.styled";

const App = () => {
  return (
    <>
      <Button primary>Click</Button>
      <Button>Save</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </>
  );
};

export default App;
