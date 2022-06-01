import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateWordFB } from "./redux/modules/word";

const Edit = (props) => {
  const word_index = useParams().index;
  const word_id = useParams().myid;
  const word_list = useSelector((state) => state.word.list);

  const Navigate = useNavigate();

  const textInput = React.useRef(null);
  const pronunciationInput = React.useRef(null);
  const meaningInput = React.useRef(null);
  const exampleInput = React.useRef(null);
  const translationInput = React.useRef(null);

  const dispatch = useDispatch();

  const editWordList = () => {
    const myInput = {
      id: word_id,
      text: textInput.current.value,
      pronunciation: pronunciationInput.current.value,
      meaning: meaningInput.current.value,
      example: exampleInput.current.value,
      translation: translationInput.current.value,
    };
    dispatch(updateWordFB(myInput));
    Navigate(`/`);
  };

  return (
    <FullCover>
      <Title>단어 수정하기</Title>
      <InputCover>
        <ThisP>단어</ThisP>
        <MyInput
          type="text"
          defaultValue={word_list[word_index].text}
          ref={textInput}
        />
        <ThisP>발음</ThisP>
        <MyInput
          type="text"
          defaultValue={word_list[word_index].pronunciation}
          ref={pronunciationInput}
        />
        <ThisP>뜻</ThisP>
        <MyInput
          type="text"
          defaultValue={word_list[word_index].meaning}
          ref={meaningInput}
        />
        <ThisP>예문</ThisP>
        <MyInput
          type="text"
          defaultValue={word_list[word_index].example}
          ref={exampleInput}
        />
        <ThisP>예문해석</ThisP>
        <MyInput
          type="text"
          defaultValue={word_list[word_index].translation}
          ref={translationInput}
        />
      </InputCover>
      <InputButton onClick={editWordList}>수정하기</InputButton>
    </FullCover>
  );
};

export default Edit;

const FullCover = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Title = styled.h3`
  color: rgb(10, 112, 41);
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
