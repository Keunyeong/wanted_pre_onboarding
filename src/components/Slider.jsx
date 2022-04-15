import { useState } from "react";
import styled from "styled-components";
export default function Slider() {
  const [rate, setRate] = useState(0);
  console.log("randering");
  return (
    <SliderBox>
      <h2>SliderBox</h2>
      <View>
        <Rate>
          <span>{rate}</span>%
        </Rate>
      </View>
      <Range>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
        <ul onClick={(e) => {}}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Range>
      <CustomRange rate={rate}>
        <div
          className="cover"
          onClick={(e) => {
            const rate = Math.round((e.nativeEvent.offsetX / 300) * 100);
            setRate(rate);
          }}
        >
          <div className="range">
            <div
              className="pointer"
              draggable="true"
              onDrag={(e) => {
                const dragRate = Math.round(
                  (e.nativeEvent.clientX / 300) * 100
                );
                if (dragRate >= 0 && dragRate <= 100) {
                  console.log(dragRate);
                  setRate(dragRate);
                }
              }}
            ></div>
          </div>
        </div>
      </CustomRange>
      <BtnBox>
        <button
          onClick={(e) => {
            setRate(0);
          }}
        >
          0%
        </button>
        <button
          onClick={() => {
            setRate(25);
          }}
        >
          25%
        </button>
        <button
          onClick={() => {
            setRate(50);
          }}
        >
          50%
        </button>
        <button
          onClick={() => {
            setRate(75);
          }}
        >
          75%
        </button>
        <button
          onClick={() => {
            setRate(100);
          }}
        >
          100%
        </button>
      </BtnBox>
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
const Rate = styled.p`
  span {
    margin-right: 20px;
  }
`;
const Range = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: relative;
  input {
    margin: 0;
    padding: 0;
    width: 95%;
    border: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 7px;
    height: 50px;
    width: 95%;
    li {
      width: 15px;
      height: 15px;
      background-color: rgb(133, 133, 133);
      border-radius: 8px;
    }
  }
`;

const CustomRange = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .cover {
    height: 8px;
    width: 95%;
    background-color: #e0e0e0;
    border-radius: 4px;
    cursor: pointer;

    .range {
      position: relative;
      height: 8px;
      width: ${(props) => {
        return props.rate + "%";
      }};
      background-color: #548aff;
      border-radius: 4px;

      .pointer {
        position: absolute;
        top: -3.5px;
        right: -4px;
        width: 15px;
        height: 15px;
        background-color: #548aff;
        border-radius: 8px;
      }
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background-color: white;
    color: red;
    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;
