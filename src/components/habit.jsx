import React, { PureComponent } from 'react'

class Habit extends PureComponent {
  //PureComponent를 쓰면 props자체는 그대로 그 안의 값이 변하기 때문에 shallow comparison으로 동일한 object로 보고 update를 하지 않는다.
  //Habit에 PureComponent를 쓰고 count update 위해서는 app.jsx의 handleIncrement등 각각 props를 map()으로 새로운 배열 반환하여 새로운 object로 만들어줘야 한다.

  componentDidMount() {
    //UI상에 등록이 되었을 때 사용자에게 보여지면 호출
    console.log(`habit: ${this.props.habit.name} mounted`)
  }
  componentWillUnmount() {
    //지워지기 전에 호출
    console.log(`habit: ${this.props.habit.name} will unmount`)
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit) //Habit은 state가 없고 각각 props를 callback
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit
