// word.js

// Actions
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const REMOVE = "word/REMOVE";
const CHECK = "word/CHECK";

const initialState = {
  list: [
    {
      id: 0,
      text: "apple",
      pronunciation: "aepl",
      meaning: "사과",
      example: "He ate the apple, stalk and all.",
      translation: "그는 그 사과를 속심까지 다 먹었다.",
      check: false,
    },
    {
      id: 1,
      text: "tree",
      pronunciation: "tri",
      meaning: "나무",
      example: "The wind had snapped the tree in two.",
      translation: "바람에 그 나무가 딱 하고 두 토막이 나 버렸던 것이다.",
      check: false,
    },
    {
      id: 2,
      text: "twelve",
      pronunciation: "twelv",
      meaning: "열둘",
      example: "The President arrived, escorted by twelve soldiers.",
      translation: "병사 열두 명의 호위를 받으며 대통령이 도착했다.",
      check: false,
    },
  ],
};

// Action Creators
export function createWord(word) {
  return { type: CREATE, word };
}

export function updateWord(word) {
  return { type: UPDATE, word };
}

export function removeWord(word_id) {
  return { type: REMOVE, word_id };
}

export function checkWord(word_id) {
  return { type: CHECK, word_id };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    case "word/REMOVE": {
      const new_word_list = state.list.filter((l) => {
        return l.id != action.word_id;
      });
      return { list: new_word_list };
    }
    case "word/CHECK": {
      let temp_word_list = state.list;
      const obj = state.list.find((x) => x.id === action.word_id);
      const index = state.list.indexOf(obj);
      temp_word_list[index].check = !temp_word_list[index].check;
      const new_word_list = temp_word_list;
      return { list: new_word_list };
    }
    case "word/UPDATE": {
      let temp_word_list = state.list;
      const obj = state.list.find((x) => +x.id === +action.word.id);
      console.log(obj);
      const index = state.list.indexOf(obj);
      console.log(temp_word_list);
      console.log(index);
      temp_word_list[index].text = action.word.text;
      temp_word_list[index].pronunciation = action.word.pronunciation;
      temp_word_list[index].meaning = action.word.meaning;
      temp_word_list[index].example = action.word.example;
      temp_word_list[index].translation = action.word.translation;
      const new_word_list = temp_word_list;
      return { list: new_word_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
