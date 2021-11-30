import "./styles.css";
import { RecoilRoot } from "recoil";
import randomRgba from "random-rgba";
import styled from "styled-components";

import { OrangeTimer } from "./OrangeTimer";
import { ReadOnlyTimer } from "./ReadOnlyTimer";

const LayoutWrapper = styled.div`
  padding: 2rem;
  width: 84%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>Recoil Simple Timer</h1>
        <h2>Click the Orange timer to reset!</h2>
        <LayoutWrapper>
          <OrangeTimer />
        </LayoutWrapper>
        <LayoutWrapper>
          <ReadOnlyTimer
            bgColor={randomRgba(39)}
            borderColor={randomRgba(57)}
          />
          <ReadOnlyTimer
            bgColor={randomRgba(47)}
            borderColor={randomRgba(72)}
          />
          <ReadOnlyTimer
            bgColor={randomRgba(28)}
            borderColor={randomRgba(37)}
          />
          <ReadOnlyTimer
            bgColor={randomRgba(37)}
            borderColor={randomRgba(62)}
          />
          <ReadOnlyTimer
            bgColor={randomRgba(38)}
            borderColor={randomRgba(87)}
          />
        </LayoutWrapper>
      </RecoilRoot>
    </div>
  );
}
