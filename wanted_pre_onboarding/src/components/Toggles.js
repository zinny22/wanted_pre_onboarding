import React from 'react';
import styled from 'styled-components';

const Toggles =()=>{
  return(
    <Wrap>
      <input type='checkbox' id='toggle'></input>
      <label for='toggle'></label>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 500px;
  font-size: 30px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  #toggle{
    display: none;
  }
  label{
    cursor: pointer;
    width: 300px;
    height: 60px;
    background-color: beige;
    border-radius: 30px;
    position: relative;
    transition: 0.4s ease-out;
  }
  label:after{
    content: '';
    width: 150px;
    height: 50px;
    background-color: rebeccapurple;
    position: absolute;
    border-radius:40px;
    top: 5px;
    left: 7px;
    transition: 0.2s ease-out;
  }
  #toggle:checked + label{
    background-color: aqua;
  }
  #toggle:checked + label:after{
    background-color: red;
    left: 140px;
  }
`

export default Toggles;