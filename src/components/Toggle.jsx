import { useState } from "react";
import styled from "styled-components";

export default function Toggle() {
  const [selected, setSelected] = useState("detail");
  return (
    <ToggleBox>
      <h2>ToggleBox</h2>
      <Box>
        <List
          target="default"
          selected={selected}
          onClick={() => {
            setSelected("default");
          }}
        >
          <span>기본</span>
        </List>
        <List
          target="detail"
          selected={selected}
          onClick={() => {
            setSelected("detail");
          }}
        >
          <span>상세</span>
        </List>
        <Selected selected={selected}></Selected>
      </Box>
      <p>{selected === "default" ? "기본보기!" : "상세보기!"}</p>
    </ToggleBox>
  );
}

const ToggleBox = styled.div`
  width: 300px;
  margin-bottom: 20px;
  h2 {
    margin: 10px 0;
  }
  p {
    border: 1px solid #999;
    width: 200px;
    margin: 10px 0;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  overflow: hidden;
`;

const List = styled.div`
  position: relative;
  width: 100px;
  background-color: #e6e6e6;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  span {
    position: absolute;
    top: 0;
    left: 35px;
    z-index: 2;
    font-weight: 900;
    color: ${(props) => {
      if (props.selected === props.target) {
        return "black";
      } else {
        return "#999999";
      }
    }};
    transition: all 0.5s ease-out;
  }
`;
const Selected = styled.div`
  position: absolute;
  top: 1px;
  left: ${(props) => {
    if (props.selected === "default") {
      return "1px";
    } else {
      return "101px";
    }
  }};
  width: 98px;
  height: 28px;
  border-radius: 20px;
  background-color: white;
  transition: all 0.3s ease-out;
`;
