// 3. 引入 Input 等组件
import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      // 4. 接收 TodoList.js 中传递的数据
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo' 
            className="todo-input" 
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            onKeyUp={this.props.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.props.handleAddItem}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
        {/* 5. 在处理 handleDeleteItem 的时候需要注意，index 的值需要再进行处理 */}
          <List
            size="large"
            bordered
            dataSource={this.props.todoList}
            renderItem={(item, index) => (
              <List.Item onClick={() => {this.props.handleDeleteItem(index)}}>
                {index + 1} - {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;
