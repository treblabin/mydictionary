import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  const word_index = useParams().index;
  const word_list = useSelector((state) => state.word.list);

  return (
    <FullCover>
      <Title>단어 수정하기</Title>
      <InputCover>
        <ThisP>단어</ThisP>
        <MyInput type="text" placeholder={word_list[word_index].text} />
        <ThisP>발음</ThisP>
        <MyInput
          type="text"
          placeholder={word_list[word_index].pronunciation}
        />
        <ThisP>뜻</ThisP>
        <MyInput type="text" placeholder={word_list[word_index].meaning} />
        <ThisP>예문</ThisP>
        <MyInput type="text" placeholder={word_list[word_index].example} />
        <ThisP>예문해석</ThisP>
        <MyInput type="text" placeholder={word_list[word_index].translation} />
      </InputCover>
      <InputButton>수정하기</InputButton>
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
