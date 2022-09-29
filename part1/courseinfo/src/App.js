const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part= (props) => {
  return (
    <div>
      <p> {props.part} {props.exercises} </p>
    </div>
  )
}

const Content= (props) => {
  const list = []

  for (let i=0; i<props.parts.length; i++) {
    list.push(<Part key={i} part={props.parts[i].name} exercises={props.parts[i].exercises} />)
  }

  return (
    <div>
      {list}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  let sum = 0
  course.parts.forEach((part)=>{
    sum = sum + part.exercises
    console.log(`new sum is: ${sum}`)
  })
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </div>
  )
}

export default App
