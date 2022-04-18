import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Input =()=>{
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")

  const [cid, setCid] = useState(false)

  //emailcheck
  function email_check(id) {
    var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return reg.test(id);
  }

  useEffect(()=>{
    if(!email_check){
      return(setCid(true))
    }
  },[id])
  return(
    <Wrap>
      <div>
        <div>email</div>
        <input onChange={(e)=>{setId(e.target.value)}}/>
        {cid&&<div className='checkemail'>이메일 형식을 지켜주세요!</div>}
      </div>
      <div>
        <div>password</div>
        <input type="password" onChange={(e)=>{setPw(e.target.value)}}/>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
margin-top: 20px;
width: 500px;
margin: auto;
input{
  padding: 10px;
  border-radius: 4px;
  border: 1px solid gray;
  width: 90%;
}
.checkemail{
  color: red;
}
`

export default Input;