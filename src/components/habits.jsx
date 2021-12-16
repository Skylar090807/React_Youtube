import React, { Component } from 'react' //Habits에 props habit을 받아온다. habit은 습관들 리스트 목록으로 habit안의 어떤 count가 변경되고 update되어도 결국은 새로운 habit에 목록을 만들어 update하기 때문에 Purecomponent를 써도 결과가 같다.
import Habit from './habit'
import HabitAddForm from './habitAddForm'

class Habits extends Component {
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    )
  }
}

export default Habits
