// word.js

// Actions
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const REMOVE = "word/REMOVE";

const initialState = {
  list: ["apple", "tree", "twelve"],
};

// Action Creators
export function createWord(word) {
  return { type: CREATE, word };
}

export function updateWord(word) {
  return { type: UPDATE, word };
}

export function removeWord(word) {
  return { type: REMOVE, word };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/CREATE": {
      const new_word_list = [...state, list, action.word];
      return { list: new_word_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
