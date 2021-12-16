import React, { PureComponent } from 'react'

class HabitAddForm extends PureComponent {
  formRef = React.createRef() //react Ref and the DOM
  inputRef = React.createRef()

  onSubmit = (event) => {
    event.preventDefault() //preventDefault 브라우저의 기본 기능 취소
    const name = this.inputRef.current.value
    name && this.props.onAdd(name) //onAdd라는 callback function을 App의 handleAdd를 props로 받는다.
    this.formRef.current.reset() //this.inputRef.current.value = '';
  }

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="Please into your Habit" />
        <button className="add-button">Add</button>
      </form>
    )
  }
}

export default HabitAddForm
