import React from "react";
import styled from "styled-components";

const Toggles = () => {
  return (
    <Wrap>
      <input type="checkbox" id="toggle"></input>
      <label htmlFor="toggle"></label>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  font-size: 30px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  #toggle {
    display: none;
  }
  label {
    cursor: pointer;
    width: 300px;
    height: 60px;
    background-color: #babdbe;
    border-radius: 30px;
    position: relative;
    transition: 0.4s ease-out;
  }
  label:after {
    content: "";
    width: 150px;
    height: 45px;
    background-color: white;
    position: absolute;
    border-radius: 40px;
    top: 7px;
    left: 10px;
    transition: 0.2s ease-out;
  }
  #toggle:checked + label {
    background-color: #babdbe;
  }
  #toggle:checked + label:after {
    background-color: white;
    left: 140px;
  }
  div {
    display: flex;
    position: absolute;
  }
`;

export default Toggles;
