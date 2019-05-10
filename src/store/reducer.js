// // 定义一个数据 defaultState
// const defaultState = {
//   inputValue: '',
//   todoList: [
//     // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
//     // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
//     // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
//     // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
//   ]
// }

// // 将数据 defaultState 最终以 state 形式导出去
// export default (state = defaultState, action) => {
//   // 打印 state 和 action
//   // console.log(state);
//   // console.log(action);

//   // 在 reducer.js 中获取数据，并 return 回去处理结果
//   if(action.type === 'change_input_value') {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.inputValue = action.value;
//     return newState;
//   }

//   // 5. 在 reducer.js 中获取数据，并 return 回去处理结果
//   if(action.type === 'add_todo_item') {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.todoList.push(newState.inputValue);
//     newState.inputValue = '';
//     return newState;
//   }

//   if(action.type === 'delete_todo_item'){
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.todoList.splice(action.index, 1);
//     return newState;
//   }

//   return state;
// }


import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'; // 2. 引用 actionTypes

// 定义一个数据 defaultState
const defaultState = {
  inputValue: '',
  todoList: [
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
  ]
}

// 将数据 defaultState 最终以 state 形式导出去
export default (state = defaultState, action) => {
  // 打印 state 和 action
  // console.log(state);
  // console.log(action);

  // 在 reducer.js 中获取数据，并 return 回去处理结果
  // 3. 使用 actionTypes
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  // 在 reducer.js 中获取数据，并 return 回去处理结果
  // 3. 使用 actionTypes
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  // 在 reducer.js 中获取数据，并 return 回去处理结果
  // 3. 使用 actionTypes
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index, 1);
    return newState;
  }

  return state;
}

