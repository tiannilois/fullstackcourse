const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
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
  let parts = props.parts

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  let exercises = props.parts.map(part => part.exercises);
  let sum = exercises.reduce((previousValue, currentValue) => previousValue + currentValue);
  return (
    <div>
      <p>total of {sum} exercises </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course
