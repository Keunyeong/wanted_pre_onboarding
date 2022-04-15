import { useState } from "react";
import styled from "styled-components";
export default function Slider() {
  const [rate, setRate] = useState(0);
  return (
    <SliderBox>
      <h2>SliderBox</h2>
      <View>
        <Rate>{rate}%</Rate>
      </View>
      <Range>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
      </Range>
    </SliderBox>
  );
}

const SliderBox = styled.div`
  width: 300px;
  height: 300px;
`;

const View = styled.div`
  width: 100%;
  height: 60px;
  border: 2px solid #6e6e6e;
  border-radius: 5px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;
const Rate = styled.p``;
const Range = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  input {
    margin: 0;
    padding: 0;
    width: 95%;
  }
`;
