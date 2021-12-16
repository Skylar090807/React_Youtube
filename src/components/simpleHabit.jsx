import React, { useState, useRef, useCallback, useEffect } from 'react'

const SimpleHabit = (props) => {
  //function component에선 react Hook제공 useState API 통해 state 설정, update 함수를 받아올 수 있다.
  const [count, setCount] = useState(0) //useState는 아무리 많이 호출해도 해당 component에 연결된 state는 따로 저장되어 동일한 값을 받아온다.
  const spanRef = useRef()

  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  })

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`)
  }) //},[]) 텅텅 빈 배열을 전달하면 처음 mount되었을 때만 호출. 원하는 data [count]를 주면 count가 변경될 때마다 호출.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  )
}

export default SimpleHabit

// class simpleHabit extends Component { //class type Component
//   state = {
//     count: 0
//   }

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button className="habit-button habit-increase" onClick = {this.handelIncrement}>
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

// export default simpleHabit;
