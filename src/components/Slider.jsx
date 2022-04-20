import { useEffect, useState } from "react";
import styled from "styled-components";
export default function Slider() {
  const [rate, setRate] = useState(0);
  const [start, setStart] = useState(0);
  const [rateWidth, setRateWidth] = useState(300);
  const [width, setWidth] = useState(0);
  const [drag, setDrag] = useState(0);
  useEffect(() => {
    document.querySelector(".rateNumber").value = rate;
  }, [rate]);

  return (
    <SliderBox
      onDragOver={(e) => {
        e.preventDefault();
        let dragRate = width + e.clientX - start;
        if (dragRate <= 0) {
          dragRate = 0;
        } else if (dragRate >= rateWidth) {
          dragRate = rateWidth;
        }
        const rate = Math.round((dragRate / rateWidth) * 100);
        setRate(rate);
        setDrag(dragRate);
      }}
    >
      <h2>SliderBox</h2>
      <View>
        <Rate>
          <input
            type="number"
            className="rateNumber"
            min="0"
            max="100"
            onChange={(e) => {
              let rate = e.target.value;
              if (rate < 0) {
                rate = 0;
              } else if (rate > 100) {
                rate = 100;
              }
              setRate(rate);
              setDrag((rate / 100) * 300);
            }}
          />
          %
        </Rate>
      </View>
      <CustomRange
        rate={drag}
        width={rateWidth}
        onDragOver={(e) => {
          e.preventDefault();
          let dragRate = width + e.clientX - start;
          if (dragRate <= 0) {
            dragRate = 0;
          } else if (dragRate >= rateWidth) {
            dragRate = rateWidth;
          }
          const rate = Math.round((dragRate / rateWidth) * 100);

          setRate(rate);
          setDrag(dragRate);
        }}
      >
        <div className="cover">
          <div className="p25"></div>
          <div className="p50"></div>
          <div className="p75"></div>
          <div className="range">
            <div
              className="pointer"
              draggable
              onDragStart={(e) => {
                setStart(e.clientX);
              }}
              onDragEnd={(e) => {
                let dragRate = width + e.clientX - start;
                if (dragRate <= 0) {
                  dragRate = 0;
                } else if (dragRate >= rateWidth) {
                  dragRate = rateWidth;
                }
                setWidth(dragRate);
              }}
            ></div>
          </div>
        </div>
      </CustomRange>
      <BtnBox>
        <button
          onClick={(e) => {
            const dragRate = (0 / 100) * 300;
            setRate(0);
            setDrag(dragRate);
            setWidth(dragRate);
          }}
        >
          0%
        </button>
        <button
          onClick={() => {
            const dragRate = (25 / 100) * 300;
            setDrag(dragRate);
            setWidth(dragRate);
            setRate(25);
          }}
        >
          25%
        </button>
        <button
          onClick={() => {
            const dragRate = (50 / 100) * 300;
            setDrag(dragRate);
            setWidth(dragRate);
            setRate(50);
          }}
        >
          50%
        </button>
        <button
          onClick={() => {
            const dragRate = (75 / 100) * 300;
            setDrag(dragRate);
            setWidth(dragRate);
            setRate(75);
          }}
        >
          75%
        </button>
        <button
          onClick={() => {
            const dragRate = (100 / 100) * 300;
            setDrag(dragRate);
            setWidth(dragRate);
            setRate(100);
          }}
        >
          100%
        </button>
      </BtnBox>
      <Manual>
        <p>- textbox 수치에 직접 숫자 입력하여 변경 가능</p>
        <p>- 포인트 드래그하여 변경 가능</p>
        <p>- 슬라이더 아래 5가지 포인트를 클릭하여 변경 가능</p>
      </Manual>
    </SliderBox>
  );
}

const SliderBox = styled.div`
  width: 300px;
  h2 {
    margin: 10px 0;
  }
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
  input {
    margin-right: 20px;
    width: 60px;
    border: none;
    background-color: #f0f0f0;
    font-size: 20px;
  }
`;

const CustomRange = styled.div`
  width: ${(props) => props.width + "px"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  .cover {
    position: relative;
    height: 8px;
    width: ${(props) => props.width + "px"};
    background-color: #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    .p25 {
      position: absolute;
      top: -3.5px;
      left: ${(25 / 100) * 300 - 7 + "px"};
      width: 15px;
      height: 15px;
      background-color: ${(props) => {
        return props.rate >= (25 / 100) * 300 ? "#548aff" : "#e0e0e0";
      }};
      border-radius: 8px;
    }
    .p50 {
      position: absolute;
      top: -3.5px;
      left: ${(50 / 100) * 300 - 7 + "px"};
      width: 15px;
      height: 15px;
      background-color: ${(props) => {
        return props.rate >= (50 / 100) * 300 ? "#548aff" : "#e0e0e0";
      }};
      border-radius: 8px;
    }
    .p75 {
      position: absolute;
      top: -3.5px;
      left: ${(75 / 100) * 300 - 7 + "px"};
      width: 15px;
      height: 15px;
      background-color: ${(props) => {
        return props.rate >= (75 / 100) * 300 ? "#548aff" : "#e0e0e0";
      }};
      border-radius: 8px;
    }
    .range {
      position: relative;
      height: 8px;
      width: ${(props) => {
        return props.rate + "px";
      }};
      background-color: #548aff;
      border-radius: 4px;

      .pointer {
        position: absolute;
        top: -3.5px;
        right: -8px;
        width: 15px;
        height: 15px;
        background-color: #548aff;
        border-radius: 8px;
        border: 2px solid white;
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

const Manual = styled.div`
  margin: 20px 0;
  p {
    font-size: 14px;
    margin: 5px 0;
  }
`;
