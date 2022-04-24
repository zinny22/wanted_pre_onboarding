import React, { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

const Dropdown = () => {
  const List = [
    { name: '토마토' },
    { name: '고구마' },
    { name: '감자' },
    { name: '오이*극혐' },
    { name: '구황작물조아' },
  ]
  //드롭여부 확인
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  return (
    <div>
      <DropWrap>
        <button className="dropbtn" onClick={() => setIsActive(!isActive)}>
          {category ? <p>{category}</p> : <p>카테고리</p>}
          {isActive ? <AiOutlineUp size="20" /> : <AiOutlineDown size="20" />}
        </button>
        {isActive && (
          <CategoryWrap>
            <input
              className="category"
              placeholder="검색어를 입력하세요"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            {List.filter((d) => {
              if (search === "") {
                return d
              } else if (d.name.toLowerCase().includes(search.toLowerCase())) {
                return d;
              }
            }).map(d => {
              return (
                <div
                  className="category"
                  onClick={() => {
                    setCategory(d.name);
                    setIsActive(false);
                  }}
                  key={d.name}
                  s
                >
                  {d.name}
                </div>
              );
            })}
          </CategoryWrap>
        )}
      </DropWrap>
    </div>
  );
};
const DropWrap = styled.div`
  position: relative;
  width: 400px;
  margin: 30px auto;
  .dropbtn {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    align-items: center;
    border-radius: 4px;
    padding: 15px;
    border: 1px solid #ceced9;
    width: 400px;
    height: 43px;
    cursor: pointer;
  }
`;

const CategoryWrap = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 400px;
  border: 1px solid #ceced9;
  border-radius: 4px;
  transition: all 1s;
  .category {
    padding: 15px;
    border: none;
    border-bottom: 1px solid gray;
    width: 370px;
    :focus {
      outline: none;
    }
  }
`;

const Line = styled.hr`
  width: 88%;
  margin: auto;
  border: 0.5px solid #e4e2eb;
`;
export default Dropdown;
