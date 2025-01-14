const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts : [
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
          exercises:14
        }
      ]
    } 
 


  return (
    <div>
        <Header course={course.name} />
        <Content course={course} />
        <Total course={course} />
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part contenido={props.course.parts[0].name} nroEjercicio={props.course.parts[0].exercises}/>
      <Part contenido={props.course.parts[1].name} nroEjercicio={props.course.parts[1].exercises}/>
      <Part contenido={props.course.parts[2].name} nroEjercicio={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises;  
  return(
    <div>
     <p>Number of exercises {totalExercises}</p> 
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.contenido} {props.nroEjercicio}
      </p>
    </div>
  )
}
export default App