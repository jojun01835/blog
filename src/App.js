import { useState } from "react";
import "./App.css";
import { styled } from "styled-components";

const Box = styled.div`
  background: #222;
  color: pink;
  padding: 20px 0;
`;
function App() {
  function Modal(props) {
    let [A, setA] = useState("대형마트에는 가격이 저렴해요.");
    return (
      <div className="modal" style={{ background: props.color }}>
        <h2>{props.settitle}</h2>
        <p>날짜</p>
        <p>{A}</p>
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          닫기
        </button>
        <button
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              setA("이게뭐양");
            }
          }}
        >
          글수정
        </button>
      </div>
    );
  }
  let [fashion, setfashion] = useState(["편집샵", "백화점", "아울렛"]);
  let [count, setcount] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  let [input, setinput] = useState("");
  return (
    <div>
      <Box>
        <h4>Blog</h4>
      </Box>
      <button
        onClick={() => {
          let copy = [...fashion];
          copy[0] = "이마트";

          setfashion(copy);
          console.log(copy);
        }}
      >
        수정
      </button>
      {modal === true ? <Modal fashion={fashion} color={"pink"} settitle={title} /> : null}
      {fashion.map((item, index) => {
        return (
          <div className="list" key={item}>
            <h4
              onClick={() => {
                setModal(!modal);
                settitle(item);
              }}
            >
              {item}
              &nbsp;
              <span
                className="font"
                onClick={(e) => {
                  e.stopPropagation();
                  setcount(count + 1);
                }}
              >
                좋아요 : 💕{count}
              </span>
            </h4>

            <p>2023/07/24</p>
            <button
              onClick={() => {
                let copy = [...fashion];
                copy.splice(index, 1);
                setfashion(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setinput(e.target.value);

          console.log(input);
        }}
      />
      <button
        onClick={() => {
          let copy = [...fashion];
          copy.push(input);
          setfashion(copy);
          console.log(copy);
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

export default App;
