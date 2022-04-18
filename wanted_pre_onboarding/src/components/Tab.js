import React, { useState } from "react";
import styled from "styled-components";

//components
import Slider from "./Slider";
import Toggles from "./Toggles";
import Input from "./Input";
import Dropdown from "./Dropdown";

const Tap = () => {
  const [index, setIndex] = useState(0);

  return (
    <React.Fragment>
      <Wrap>
        <div
          className={index === 0 ? "active" : "" }
          onClick={() => {
            setIndex(0);
          }}
        >
          Toggles
        </div>
        <div
          className={index === 1 ? "active" : ""}
          onClick={() => {
            setIndex(1);
          }}
        >
          Slider
        </div>
        <div
          className={index === 2 ? "active" : ""}
          onClick={() => {
            setIndex(2);
          }}
        >
          Input
        </div>
        <div
          className={index === 3 ? "active" : ""}
          onClick={() => {
            setIndex(3);
          }}
        >
          Dropdown
        </div>
      </Wrap>
      {index === 1 ? (
        <Slider />
      ) : index === 2 ? (
        <Input />
      ) : index === 3 ? (
        <Dropdown />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: aliceblue;
  width: 500px;
  font-size: 30px;
  margin: auto;
  div{
    margin-right: 20px;
    margin-top: 20px;
  }
  .active{
    border-bottom: 5px solid red;
  }
`;

export default Tap;
