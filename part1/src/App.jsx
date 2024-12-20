const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
 


  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
    </div>
  )
}

const Header = (props) =>{
  console.log(props);
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
      <Part contenido={props.parts[0].name} nroEjercicio={props.parts[0].exercises}/>
      <Part contenido={props.parts[1].name} nroEjercicio={props.parts[1].exercises}/>
      <Part contenido={props.parts[2].name} nroEjercicio={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;  
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