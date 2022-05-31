import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiCheck, BiEdit, BiTrash, BiPlus, BiChevronUp } from "react-icons/bi";
import { removeWord, checkWord } from "./redux/modules/word";

const Main = (props) => {
  const [count, setCount] = React.useState(0);
  const data = useSelector((state) => state.word.list);
  const ReversedData = data.map((datas) => datas).reverse();
  console.log(ReversedData);
  const dispatch = useDispatch();

  return (
    <AppCover>
      <Cover>
        {ReversedData.map((n, i) => {
          return (
            <MyCard key={n.id} IsChecked={n.check}>
              <BtnCover>
                <IconContext.Provider
                  value={{
                    color: n.check === true ? "white" : "rgb(10, 112, 41)",
                    size: 24,
                    background: "transparent",
                  }}
                >
                  <button
                    style={{
                      display: "contents",
                    }}
                  >
                    <BiCheck
                      onClick={() => {
                        dispatch(checkWord(n.id));
                        setCount(count + 1);
                      }}
                    />
                  </button>
                  <Link
                    to={`/edit/${ReversedData.length - (i + 1)}/${n.id}`}
                    style={{
                      display: "contents",
                    }}
                  >
                    <BiEdit />
                  </Link>
                  <BiTrash onClick={() => dispatch(removeWord(n.id))} />
                </IconContext.Provider>
              </BtnCover>
              <TextP IsChecked={n.check}>{n.text}</TextP>
              <PronunciationP IsChecked={n.check}>
                [{n.pronunciation}]
              </PronunciationP>
              <MeaningP IsChecked={n.check}>{n.meaning}</MeaningP>
              <ExampleP IsChecked={n.check}>{n.example}</ExampleP>
              <ExampleP IsChecked={n.check}>{n.translation}</ExampleP>
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
      <button
        style={{
          display: "contents",
          size: "24",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <BiChevronUp
          style={{
            background: "rgb(10, 112, 41)",
            color: "white",
            size: "42",
            width: "30px",
            height: "30px",
            borderRadius: "30px",
            position: "fixed",
            bottom: "30",
            left: "30",
          }}
        />
      </button>
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
  background-color: ${(props) =>
    props.IsChecked ? "rgb(10, 112, 41)" : "rgb(255, 255, 255, 0.4)"};
  @media screen and (max-width: 1000px) {
    width: calc((100% - 120px) / 2);
  }
  @media screen and (max-width: 600px) {
    width: calc(100% - 60px);
  }
`;

const TextP = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
  color: ${(props) => (props.IsChecked ? "white" : "black")};
`;

const PronunciationP = styled.p`
  font-size: 18px;
  margin: 5px 0px;
  color: ${(props) => (props.IsChecked ? "white" : "black")};
`;

const MeaningP = styled.p`
  font-size: 18px;
  margin: 0px;
  color: ${(props) => (props.IsChecked ? "white" : "black")};
`;

const ExampleP = styled.p`
  font-size: 14px;
  margin: 5px 0px;
  color: ${(props) => (props.IsChecked ? "white" : "rgb(9, 132, 227)")};
`;

const BtnCover = styled.div`
  display: flex;
  float: right;
`;

export default Main;
