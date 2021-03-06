// word.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const REMOVE = "word/REMOVE";
const CHECK = "word/CHECK";
const COUNTER = "word/COUNTER";

const initialState = {
  count: 0,
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word };
}

export function updateWord(word) {
  return { type: UPDATE, word };
}

export function removeWord(word_id) {
  return { type: REMOVE, word_id };
}

export function checkWord(word_index) {
  return { type: CHECK, word_index };
}

export function counter(count) {
  return { type: COUNTER, count };
}

//middlewares

export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({ ...doc.data(), id: doc.id });
    });
    dispatch(loadWord(word_list));
  };
};

export const createWordFB = (word) => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    let id_list = [0];
    word_data.forEach((doc) => {
      const my_id = doc.id;
      id_list.push(+my_id.split("a")[1]);
    });
    const this_id = Math.max(...id_list) + 1;
    const docRef = await setDoc(doc(db, "word", `a${this_id}`), {
      ...word,
    });
    dispatch(createWord(word));
  };
};

// export const createWordFB = (word) => {
//   return async function (dispatch) {
//     const word_data = await getDocs(collection(db, "word"));
//     let id_list = [];
//     word_data.forEach((doc) => {
//       id_list.push(+doc.id);
//     });
//     const docRef = await addDoc(collection(db, "word", Math.max(id_list) + 1), {
//       ...word,
//     });
//   };
// };

export const checkWordFB = (word_id) => {
  return async function (dispatch, getState) {
    const word_list = getState().word.list;
    const word_index = word_list.findIndex((b) => {
      return b.id === word_id;
    });
    dispatch(checkWord(word_index));
    const docRef = doc(db, "word", word_id);
    await updateDoc(docRef, { check: getState().word.list[word_index].check });
  };
};

export const removeWordFB = (word_id) => {
  return async function (dispatch, getState) {
    dispatch(removeWord(word_id));
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);
  };
};

export const updateWordFB = (words) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "word", words.id);
    await updateDoc(docRef, {
      text: words.text,
      pronunciation: words.pronunciation,
      meaning: words.meaning,
      example: words.example,
      translation: words.translation,
    });
    dispatch(updateWord(words));
    dispatch(counter(0));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    case "word/REMOVE": {
      const new_word_list = state.list.filter((l) => {
        return l.id !== action.word_id;
      });
      return { list: new_word_list };
    }
    case "word/CHECK": {
      let temp_word_list = state.list;
      temp_word_list[action.word_index].check =
        !temp_word_list[action.word_index].check;
      const new_word_list = temp_word_list;
      return { list: new_word_list };
    }
    case "word/UPDATE": {
      let temp_word_list = state.list;
      const obj = state.list.find((x) => +x.id === +action.word.id);
      const index = state.list.indexOf(obj);
      temp_word_list[index].text = action.word.text;
      temp_word_list[index].pronunciation = action.word.pronunciation;
      temp_word_list[index].meaning = action.word.meaning;
      temp_word_list[index].example = action.word.example;
      temp_word_list[index].translation = action.word.translation;
      const new_word_list = temp_word_list;
      return { list: new_word_list };
    }
    case "word/COUNTER": {
      const new_count = state.count + 1;
      return { count: new_count };
    }
    // do reducer stuff
    default:
      return state;
  }
}
