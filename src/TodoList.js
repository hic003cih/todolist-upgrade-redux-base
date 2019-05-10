

// import React, { Component } from 'react'; // 引入 React 及其 Component
// import './index.css'; // 引入 index.css
// import { Input, Button, List } from 'antd'; // 引入 antd 的组件
// import 'antd/dist/antd.css'; // 引入 antd 的样式
// import store from './store'; // 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

// class TodoList extends Component {

//   // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
//   constructor(props) {
//     super(props);
//     // 我们尝试在 Console 中打印 store.getState()
//     // console.log(store.getState());
//     this.state = store.getState();
    
//     // 处理 handleInputChange 方法
//     this.handleInputChange = this.handleInputChange.bind(this);

//     // 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
//     this.handleStoreChange = this.handleStoreChange.bind(this);
//     store.subscribe(this.handleStoreChange);

//     // 2. 处理 handleAddItem 方法
//     this.handleAddItem = this.handleAddItem.bind(this);

//     // 7. 处理 handleInputKeyUp 方法
//     this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
//   }
// // 编写 handleInputChange 方法
// handleInputChange(e) {
//   // 通过 dispatch(action)，将数据传递给 store
//   const action = {
//     type: 'change_input_value',
//     value: e.target.value
//   }
//   store.dispatch(action);
// }

// // 在 handleStoreChange 中处理数据
// handleStoreChange() {
//   this.setState(store.getState());
// }

// // 3. 编写 handleAddItem 方法
// handleAddItem() {
//   // 4. 通过 dispatch(action)，将数据传递给 store
//   const action = {
//     type: 'add_todo_item'
//   }
//   store.dispatch(action);
// }

// // 8. 为 Input 的 keyUp 方法 handleInputKeyUp 绑定 handleAddItem
// handleInputKeyUp(e) {
//   if(e.keyCode === 13) {
//     this.handleAddItem();
//   }
// }
// // 2. 编写 handleDeleteItem 方法
// handleDeleteItem(index){
//   console.log(index);
//     // 3. 通过 dispatch(action)，将数据传递给 store
//     const action = {
//       type: 'delete_todo_item',
//       index
//     }
//     store.dispatch(action);
//   }

//   render() {
//     return (
//       <div className="todo">
//         <div className="todo-title">
//           <h1>TodoList</h1>
//         </div>
//         {/* 使用 Input、Button 组件 */}
//         <div className="todo-action">
//           {/* Input 绑定 handleInputChange 事件 */}
//           {/* 6. Input 绑定回车事件：handleInputKeyUp */}
//           <Input 
//             placeholder='todo' 
//             className="todo-input" 
//             value={this.state.inputValue}
//             onChange={this.handleInputChange}
//             onKeyUp={this.handleInputKeyUp}
//           />
//           {/* 1. 为 Button 定义点击执行 handleAddItem 方法 */}
//           <Button 
//             type="primary" 
//             className="todo-submit"
//             onClick={this.handleAddItem}
//           >
//             提交
//           </Button>
//         </div>
//         {/* 使用 List 组件 */}
//         {/* 将原先的 data 换成 state 中的 todoList */}
//         <div className="todo-list">
//           <List
//             size="large"
//             bordered
//             dataSource={this.state.todoList}
//             renderItem={(item, index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{index + 1} - {item}</List.Item>)}
//           />
//         </div>
//       </div>
//     );
//   }

// }

// export default TodoList;



//抽取 action 中的 type

// import React, { Component } from 'react'; // 引入 React 及其 Component
// import './index.css'; // 引入 index.css
// import { Input, Button, List } from 'antd'; // 引入 antd 的组件
// import 'antd/dist/antd.css'; // 引入 antd 的样式
// import store from './store'; // 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'; // 2. 引用 actionTypes

// class TodoList extends Component {

//   // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
//   constructor(props) {
//     super(props);
//     // 我们尝试在 Console 中打印 store.getState()
//     // console.log(store.getState());
//     this.state = store.getState();
    
//     // 处理 handleInputChange 方法
//     this.handleInputChange = this.handleInputChange.bind(this);

//     // 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
//     this.handleStoreChange = this.handleStoreChange.bind(this);
//     store.subscribe(this.handleStoreChange);

//     // 处理 handleAddItem 方法
//     this.handleAddItem = this.handleAddItem.bind(this);

//     // 处理 handleInputKeyUp 方法
//     this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
//   }

//   // 编写 handleInputChange 方法
//   handleInputChange(e) {
//     // 通过 dispatch(action)，将数据传递给 store
//     // 3. 使用 actionTypes
//     const action = {
//       type: CHANGE_INPUT_VALUE,
//       value: e.target.value
//     }
//     store.dispatch(action);
//   }

//   // 在 handleStoreChange 中处理数据
//   handleStoreChange() {
//     this.setState(store.getState());
//   }

//   // 编写 handleAddItem 方法
//   handleAddItem() {
//     // 通过 dispatch(action)，将数据传递给 store
//     // 3. 使用 actionTypes
//     const action = {
//       type: ADD_TODO_ITEM
//     }
//     store.dispatch(action);
//   }

//   // 为 Input 的 keyUp 方法 handleInputKeyUp 绑定 handleAddItem
//   handleInputKeyUp(e) {
//     if(e.keyCode === 13) {
//       this.handleAddItem();
//     }
//   }

//   // 编写 handleDeleteItem 方法
//   handleDeleteItem(index) {
//     console.log(index);
//     // 通过 dispatch(action)，将数据传递给 store
//     // 3. 使用 actionTypes
//     const action = {
//       type: DELETE_TODO_ITEM,
//       index
//     }
//     store.dispatch(action);
//   }

//   render() {
//     return (
//       <div className="todo">
//         <div className="todo-title">
//           <h1>TodoList</h1>
//         </div>
//         {/* 使用 Input、Button 组件 */}
//         <div className="todo-action">
//           {/* Input 绑定 handleInputChange 事件 */}
//           {/* Input 绑定回车事件：handleInputKeyUp */}
//           <Input 
//             placeholder='todo' 
//             className="todo-input" 
//             value={this.state.inputValue}
//             onChange={this.handleInputChange}
//             onKeyUp={this.handleInputKeyUp}
//           />
//           {/* 为 Button 定义点击执行 handleAddItem 方法 */}
//           <Button 
//             type="primary" 
//             className="todo-submit"
//             onClick={this.handleAddItem}
//           >
//             提交
//           </Button>
//         </div>
//         {/* 使用 List 组件 */}
//         {/* 将原先的 data 换成 state 中的 todoList */}
//         {/* 列表点击事件绑定 handleDeleteItem 方法 */}
//         <div className="todo-list">
//           <List
//             size="large"
//             bordered
//             dataSource={this.state.todoList}
//             renderItem={(item, index) => (
//               <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{index + 1} - {item}</List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }

// }

// export default TodoList;



//抽取整个 action


// import React, { Component } from 'react';
// import './index.css';
// import { Input, Button, List } from 'antd';
// import 'antd/dist/antd.css';
// import store from './store';
// import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem } from './store/actionCreators'; // 3. 引入 actionCreators

// class TodoList extends Component {

//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleStoreChange = this.handleStoreChange.bind(this);
//     store.subscribe(this.handleStoreChange);
//     this.handleAddItem = this.handleAddItem.bind(this);
//     this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
//   }

//   handleInputChange(e) {
//     // 4. 使用 actionCreators 中的 getChangeInputValue
//     const action = getChangeInputValue(e.target.value);
//     store.dispatch(action);
//   }

//   handleStoreChange() {
//     this.setState(store.getState());
//   }

//   handleAddItem() {
//     // 4. 使用 actionCreators 中的 getAddTodoItem
//     const action = getAddTodoItem();
//     store.dispatch(action);
//   }

//   handleInputKeyUp(e) {
//     if(e.keyCode === 13) {
//       this.handleAddItem();
//     }
//   }

//   handleDeleteItem(index) {
//     // 4. 使用 actionCreators 中的 getAddTodoItem
//     const action = getDeleteTodoItem(index);
//     store.dispatch(action);
//   }

//   render() {
//     return (
//       <div className="todo">
//         <div className="todo-title">
//           <h1>TodoList</h1>
//         </div>
//         <div className="todo-action">
//           <Input 
//             placeholder='todo' 
//             className="todo-input" 
//             value={this.state.inputValue}
//             onChange={this.handleInputChange}
//             onKeyUp={this.handleInputKeyUp}
//           />
//           <Button 
//             type="primary" 
//             className="todo-submit"
//             onClick={this.handleAddItem}
//           >
//             提交
//           </Button>
//         </div>
//         <div className="todo-list">
//           <List
//             size="large"
//             bordered
//             dataSource={this.state.todoList}
//             renderItem={(item, index) => (
//               <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{index + 1} - {item}</List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }

// }

// export default TodoList;



//UI 组件和容器组件

import React, { Component } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import store from './store';
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem } from './store/actionCreators';
// 1. 将 Input 等 antd 的组件引入迁移到 TodoListUI，并引入 TodoListUI
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    // 解决 Antd 中的 bug
    e.persist();
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleAddItem() {
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    // 解决 Antd 中的 bug
    e.persist();
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleDeleteItem(index) {
    // 解决 Antd 中的 bug
    index.persist();
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }
  
  render() {
    return (
      // 2. 编写 TodoListUI，传递参数到 TodoListUI 中
      <TodoListUI
        inputValue={this.state.inputValue}
        todoList={this.state.todoList}
        handleInputChange={this.handleInputChange}
        handleInputKeyUp={this.handleInputKeyUp}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

}

export default TodoList;
