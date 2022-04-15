import styled from "styled-components";
import Slider from "./components/Slider";

export default function App() {
  return (
    <Main className="App">
      <h1>Onboarding Assignment</h1>
      <Slider />
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20px;
    margin: 10px 0;
  }
`;
