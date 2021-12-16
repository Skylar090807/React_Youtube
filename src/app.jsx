import React, { Component } from 'react'
import './app.css'
import Habits from './components/habits'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // habits[index].count++
    const habits = this.state.habits.map((item) => {
      //새로운 object로 만들어 habit에서 PureComponent쓰기. 필요없는 re-render제어.
      //array-proto-type.map map() method는 모든 요소 각각 주어진 함수를 호출한 결과를 모아 새로운 배열 반환.
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      }
      return item
    })
    this.setState({ habits })
  }

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // const count = habits[index].count - 1
    // habits[index].count = count < 0 ? 0 : count
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: habit.count < 0 ? 0 : count }
      }
      return item
    })
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.setState({ habits })
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
    this.setState({ habits })
  }

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0
    //   return habit
    // })
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      }
      return habit
    })
    this.setState({ habits })
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App
