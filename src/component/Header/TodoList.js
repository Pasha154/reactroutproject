import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        console.log(this.props.todos); // Для отладки

        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={this.props.deleteTodo}
                        toggleTodo={this.props.toggleTodo}
                    />
                ))}

                {this.props.todos.length === 0 ? <p>TodoList is empty</p> : ''}
            </div>
        );
    }
}

export default TodoList;
