import React, { memo } from 'react'
//function Type Components의 memo는 Class Type Components의 memo와 같은 기능.
//function Type Components는 this를 쓰지 않아도 된다.
const HabitAddForm = memo((props) => {
  const formRef = React.createRef() //react Ref and the DOM
  const inputRef = React.createRef()

  const onSubmit = (event) => {
    event.preventDefault() //preventDefault 브라우저의 기본 기능 취소
    const name = inputRef.current.value
    name && props.onAdd(name) //onAdd라는 callback function을 App의 handleAdd를 props로 받는다.
    formRef.current.reset() //inputRef.current.value = '';
  }

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="Please into your Habit" />
      <button className="add-button">Add</button>
    </form>
  )
})

export default HabitAddForm
