import styled from "styled-components";

export default function Dropdown() {
  return (
    <DropdownBox>
      <h2>DropdownBox</h2>
    </DropdownBox>
  );
}

const DropdownBox = styled.div`
  width: 300px;
  height: 300px;
  h2 {
    margin: 10px 0;
  }
`;
