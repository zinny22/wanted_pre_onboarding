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
          className={index === 0 ? "active" : ""}
          onClick={() => {
            setIndex(0);
          }}
        >
          TOGGLES
        </div>
        <div
          className={index === 1 ? "active" : ""}
          onClick={() => {
            setIndex(1);
          }}
        >
          SLIDER
        </div>
        <div
          className={index === 2 ? "active" : ""}
          onClick={() => {
            setIndex(2);
          }}
        >
          INPUT
        </div>
        <div
          className={index === 3 ? "active" : ""}
          onClick={() => {
            setIndex(3);
          }}
        >
          DROPDOWN
        </div>
      </Wrap>
      {index === 0 ? (
        <Toggles />
      ) : index === 1 ? (
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
  width: 550px;
  font-size: 30px;
  margin: auto;
  border-bottom: 1px solid gray;
  color: gray;
  div {
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
  }
  .active {
    color: black;
    transition: 0.4s ease-out;
    border-bottom: black;
  }
`;

export default Tap;
