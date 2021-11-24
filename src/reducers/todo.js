import { ADD_ITEM_WORDS } from "../constatns/todo_type";
const initialState = [
 
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_WORDS:
      return [
        ...state,
        {
          en: action.en,
          en_num: action.en_num,
          ua: action.ua,
          ua_num: action.ua_num,
        },
      ];
    default:
      return state;
  }
};
