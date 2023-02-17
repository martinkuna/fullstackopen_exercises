
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

// I believe the intent of Exercise 1.1 was to do the following:
// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </div>
//   )
// }

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercise_total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      {/* I believe the intent of Exercise 1.1 was to do the following:
        * <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}  />
        * however, I instead reused the component.
       */}
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Total exercise_total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App