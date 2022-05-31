import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiCheck, BiEdit, BiTrash, BiPlus } from "react-icons/bi";
import { removeWord } from "./redux/modules/word";

const Main = (props) => {
  const data = useSelector((state) => state.word.list);
  const ReversedData = data.map((datas) => datas).reverse();
  console.log(ReversedData);
  const dispatch = useDispatch();

  return (
    <AppCover>
      <Cover>
        {ReversedData.map((n, i) => {
          return (
            <MyCard key={n.id}>
              <BtnCover>
                <IconContext.Provider
                  value={{
                    color: "rgb(10, 112, 41)",
                    size: 24,
                    background: "transparent",
                  }}
                >
                  <BiCheck />
                  <Link
                    to={`/edit/${ReversedData.length - (i + 1)}`}
                    style={{
                      display: "contents",
                    }}
                  >
                    <BiEdit />
                  </Link>
                  <BiTrash onClick={() => dispatch(removeWord(n.id))} />
                </IconContext.Provider>
              </BtnCover>
              <TextP>{n.text}</TextP>
              <PronunciationP>[{n.pronunciation}]</PronunciationP>
              <MeaningP>{n.meaning}</MeaningP>
              <ExampleP>{n.example}</ExampleP>
              <ExampleP>{n.translation}</ExampleP>
            </MyCard>
          );
        })}
      </Cover>
      <Link
        to="/add"
        style={{
          display: "contents",
          size: "42",
        }}
      >
        <BiPlus
          style={{
            background: "rgb(10, 112, 41)",
            color: "white",
            size: "42",
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            position: "fixed",
            bottom: "30",
            right: "30",
          }}
        />
      </Link>
    </AppCover>
  );
};

const AppCover = styled.div``;

const Cover = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 90%;
  max-width: 1400px;
  padding: 50px 0px;
  margin: auto;
`;

const MyCard = styled.article`
  width: calc((100% - 180px) / 3);
  position: relative;
  padding: 20px;
  border: 2px solid rgb(10, 112, 41);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const TextP = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
`;

const PronunciationP = styled.p`
  font-size: 18px;
  margin: 5px 0px;
`;

const MeaningP = styled.p`
  font-size: 18px;
  margin: 0px;
`;

const ExampleP = styled.p`
  font-size: 14px;
  margin: 5px 0px;
  color: rgb(9, 132, 227);
`;

const BtnCover = styled.div`
  display: flex;
  float: right;
`;

export default Main;
