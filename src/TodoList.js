import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import Test from './test'
import './style.css'
class TodoList extends Component {

	constructor(props) {
		super(props);//super 指父类， 需要调用一次父类的构造函数 --继承
		//定义数据  状态

		//当组件的state或者props发生变化时，render函数就会重新执行
		this.state = {
			inputValue: '',
			list: ['hh', 'nn']
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.addList = this.addList.bind(this)
		this.handleListDelect = this.handleListDelect.bind(this)
	}//constructor

	render() {
		return (
			<Fragment>
				{/* aaa */}
				<div >

					<input
						className="input"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.addList}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
				<Test content={this.state.inputValue}/>
				state:
				<pre>{this.state.inputValue}</pre>

			</Fragment>

		)
	}//render
	getTodoItem() {
		return (
			this.state.list.map((item, index) => {
				return (
					<TodoItem
						key={index}
						content={item}
						index={index}
						handItemDelect={this.handleListDelect}
					/>
				)
			})
		)
	}
	handleInputChange(e) {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}//handleInputChange
	addList() {
		this.state.inputValue === '' ||
			this.setState((prevState) => ({
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}))
		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
	}
	handleListDelect(index) {
		// const list = [...this.state.list];
		// list.splice(index, 1)
		// // immutable
		// this.setState({
		// 	list: list
		// })

		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1)
			return { list }
		})
	}
}

export default TodoList;