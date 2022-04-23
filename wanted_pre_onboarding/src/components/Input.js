import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { AiFillEye } from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillCheckCircle} from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai"

const Input = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [cid, setCid] = useState(false);

  //emailcheck
  function email_check(id) {
    var reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return reg.test(id);
  }

  useEffect(() => {
    if (!email_check) {
      return setCid(true);
    }
  }, [id]);
  return (
    <Wrap>
      <div className="email">
        <label>email</label>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        {cid && <div className="checkemail">이메일 형식을 지켜주세요!</div>}
      </div>
      <div className="pw">
        {/* <label>password</label> */}
        <input
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <AiFillEye
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            margin: "auto 10px",
            position: "absolute",
            fill: "#33344B",
          }}
        />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 20px;
  width: 500px;
  margin: auto;
  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid gray;
    width: 90%;
  }
  input:focus {
    border: none;
  }
  .checkemail {
    color: red;
  }
  .pw {
    position: relative;
    align-items: center;
    margin: 0px auto 19px auto;
    justify-content: center;
  }
`;

export default Input;
