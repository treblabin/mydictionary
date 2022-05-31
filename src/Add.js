import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createWord } from "./redux/modules/word";

const Add = (props) => {
  const data = useSelector((state) => state.word.list);

  const textInput = React.useRef(null);
  const pronunciationInput = React.useRef(null);
  const meaningInput = React.useRef(null);
  const exampleInput = React.useRef(null);
  const translationInput = React.useRef(null);

  const dispatch = useDispatch();

  const addWordList = () => {
    const myInput = {
      id: data[data.length - 1].id + 1,
      text: textInput.current.value,
      pronunciation: pronunciationInput.current.value,
      meaning: meaningInput.current.value,
      example: exampleInput.current.value,
      translation: translationInput.current.value,
      check: false,
    };
    dispatch(createWord(myInput));
  };

  return (
    <FullCover>
      <Title>단어 추가하기</Title>
      <InputCover>
        <ThisP>단어</ThisP>
        <MyInput type="text" ref={textInput} />
        <ThisP>발음</ThisP>
        <MyInput type="text" ref={pronunciationInput} />
        <ThisP>뜻</ThisP>
        <MyInput type="text" ref={meaningInput} />
        <ThisP>예문</ThisP>
        <MyInput type="text" ref={exampleInput} />
        <ThisP>예문해석</ThisP>
        <MyInput type="text" ref={translationInput} />
      </InputCover>

      <InputButton onClick={addWordList}>추가하기</InputButton>
    </FullCover>
  );
};

export default Add;

const FullCover = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Title = styled.h3`
  color: green;
  margin: auto;
`;

const InputCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 30px auto 0px auto;
`;

const ThisP = styled.p`
  margin: 0px 10px;
  font-weight: bold;
`;

const MyInput = styled.input`
  margin: 5px auto 20px auto;
  width: 400px;
  border-color: rgb(10, 112, 41);
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`;

const InputButton = styled.button`
  width: 200px;
  height: 40px;
  margin: auto;
  color: white;
  background-color: rgb(10, 112, 41);
  border: none;
  font-size: 16px;
`;
