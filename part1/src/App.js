
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    // Here I use a react fragment, instead of adding extra nodes to the DOM
    <> 
      <Part part={props.part1} />
      <Part part={props.part3} />
      <Part part={props.part2} />
    </>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise_total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App