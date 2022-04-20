import { useEffect, useState } from "react";
import styled from "styled-components";

const data = [
  "chocolate",
  "strawbarry",
  "apply",
  "banana",
  "cake",
  "juice",
  "rice",
];

export default function Dropdown({ main }) {
  const [isList, setIsList] = useState(false);
  const [selected, setSelected] = useState("NONE");
  const [array, setArray] = useState(data);
  return (
    <DropdownBox>
      <h2>DropdownBox</h2>
      <Box>
        <Select
          onClick={(e) => {
            e.stopPropagation();
            setIsList(!isList);
          }}
        >
          <div className="selected">{selected}</div>
          <div className="arrow">
            <img src="assets/down-arrow.svg" alt="DOWNARROW" />
          </div>
        </Select>
        <List isList={isList}>
          <div className="search">
            <input
              type="text"
              placeholder="search here!"
              className="search_input"
              onChange={(e) => {
                e.stopPropagation();
                const searchData = data.filter((item) => {
                  return item.includes(e.target.value);
                });
                setArray(searchData);
              }}
            />
          </div>
          <ul className="list">
            {array.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setSelected(item);
                    setIsList(false);
                    document.querySelector(".search_input").value = "";
                    setArray(data);
                  }}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </List>
      </Box>
    </DropdownBox>
  );
}

const DropdownBox = styled.div`
  width: 300px;
  margin-bottom: 20px;
  h2 {
    margin: 10px 0;
  }
`;
const Box = styled.div`
  position: relative;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  .selected {
    width: 160px;
    padding: 0 10px;
    text-align: right;
  }
  .arrow {
    width: 20px;
    display: flex;
    align-items: center;
  }
`;

const List = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 99;
  overflow: hidden;
  background-color: white;
  width: 200px;
  height: ${(props) => {
    if (props.isList) {
      return "auto";
    } else {
      return "0";
    }
  }};
  border: ${(props) => {
    if (props.isList) {
      return "1px solid black";
    } else {
      return "none";
    }
  }};
  border-radius: 5px;
  box-shadow: ${(props) => {
    if (props.isList) {
      return "5px 3px 3px 1px #e6e6e6";
    } else {
      return "none";
    }
  }};
  .search {
    height: 40px;
    border-bottom: 1px solid #e6e6e6;
    input {
      width: 160px;
      height: 39px;
      margin: 0 20px;
      font-size: 20px;
      text-align: right;
      border: none;
    }
  }
  .list {
    height: auto;
    max-height: 160px;
    overflow: scroll;
    li {
      height: 40px;
      text-align: right;
      line-height: 40px;
      padding: 0 20px;
      cursor: pointer;
      :hover {
        background-color: #e6e6e6;
      }
    }
  }
`;
