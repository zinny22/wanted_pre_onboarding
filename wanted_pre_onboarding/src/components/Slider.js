import React from "react";
import styled from "styled-components";

const Slider = () => {
  let count = 0;
  console.log(count);
  return (
    <ProgressBar>
      <HighLight width={(count / 5) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 500px;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 40px auto;
`;

const HighLight = styled.div`
  background: #673ab7;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 5px solid #673ab7;
  border-radius: 40px;
  margin: 0px 0px 0px -20px;
`;
export default Slider;
