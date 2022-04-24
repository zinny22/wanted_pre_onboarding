import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Input = () => {
  const [pw, setPw] = useState({
    type: "password",
    value: false,
  });

  const [cid, setCid] = useState(false);

  //pw check
  function pwType(e) {
    setPw(() => {
      if (!pw.value) {
        return { type: "text", value: true };
      }
      return { type: "password", value: false };
    });
  }

  //email check
  function checkEmail(e) {
    var reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (reg.test(e.target.value)) {
      return setCid(true);
    } else {
      return setCid(false);
    }
  }

  return (
    <Wrap>
      <div className="email">
        <label>이메일</label>
        <input onBlur={checkEmail} placeholder='이메일을 입력해주세요'/>
        {cid ? (
          <AiFillCheckCircle
            value={{ color: "blue" }}
            style={{
              width: "23px",
              height: "23px",
              margin: "auto 10px",
              position: "absolute",
              fill: "#33344B",
              right: "27px",
              top: "27px",
            }}
          />
        ) : ("")}

        {cid ? "" : <div className="checkemail">이메일 형식을 지켜주세요!</div>}
      </div>
      <div className="pw">
        <label>비밀번호</label>
        <input type={pw.type} placeholder='비밀번호를 입력해주세요'/>
        {pw.value ? (
          <AiFillEyeInvisible
            onClick={pwType}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
              margin: "auto 10px",
              position: "absolute",
              fill: "#33344B",
              right: "25px",
              top: "23px",
            }}
          />
        ) : (
          <AiFillEye
            onClick={pwType}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
              margin: "auto 10px",
              position: "absolute",
              fill: "#33344B",
              right: "25px",
              top: "23px",
            }}
          />
        )}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 20px;
  width: 450px;
  margin: auto;
  input {
    padding: 10px;
    border-radius: 4px;
    border: none;
    border-bottom: 1px solid gray;
    width: 90%;
  }
  input:focus {
    outline: none;
  }
  .checkemail {
    color: red;
    margin-top: 10px;
  }
  .email {
    position: relative;
    align-items: center;
    margin: 30px auto 19px auto;
    justify-content: center;
  }
  .pw {
    position: relative;
    align-items: center;
    margin: 30px auto 19px auto;
    justify-content: center;
  }
`;

export default Input;
