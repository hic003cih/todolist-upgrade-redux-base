import React, { Component } from 'react'; // 引入 React 及其 Component
import './index.css'; // 引入 index.css
import { Input, Button, List } from 'antd'; // 引入 antd 的组件
import 'antd/dist/antd.css'; // 引入 antd 的样式
import store from './store'; // 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

class TodoList extends Component {

  // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);
    // 我们尝试在 Console 中打印 store.getState()
    // console.log(store.getState());
    this.state = store.getState();
    
    // 处理 handleInputChange 方法
    this.handleInputChange = this.handleInputChange.bind(this);

    // 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    // 2. 处理 handleAddItem 方法
    this.handleAddItem = this.handleAddItem.bind(this);

    // 7. 处理 handleInputKeyUp 方法
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }
// 编写 handleInputChange 方法
handleInputChange(e) {
  // 通过 dispatch(action)，将数据传递给 store
  const action = {
    type: 'change_input_value',
    value: e.target.value
  }
  store.dispatch(action);
}

// 在 handleStoreChange 中处理数据
handleStoreChange() {
  this.setState(store.getState());
}

// 3. 编写 handleAddItem 方法
handleAddItem() {
  // 4. 通过 dispatch(action)，将数据传递给 store
  const action = {
    type: 'add_todo_item'
  }
  store.dispatch(action);
}

// 8. 为 Input 的 keyUp 方法 handleInputKeyUp 绑定 handleAddItem
handleInputKeyUp(e) {
  if(e.keyCode === 13) {
    this.handleAddItem();
  }
}
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        {/* 使用 Input、Button 组件 */}
        <div className="todo-action">
          {/* Input 绑定 handleInputChange 事件 */}
          {/* 6. Input 绑定回车事件：handleInputKeyUp */}
          <Input 
            placeholder='todo' 
            className="todo-input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          {/* 1. 为 Button 定义点击执行 handleAddItem 方法 */}
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleAddItem}
          >
            提交
          </Button>
        </div>
        {/* 使用 List 组件 */}
        {/* 将原先的 data 换成 state 中的 todoList */}
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

}

export default TodoList;

