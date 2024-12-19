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
      <Header course={course}/>
      <Content contenido={part1} nroEjercicio={exercises1}/>
      <Content contenido={part2} nroEjercicio={exercises2}/>
      <Content contenido={part3} nroEjercicio={exercises3}/>
      <Total nroEjercicio1= {exercises1} nroEjercicio2= {exercises2} nroEjercicio3 ={exercises3}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
    <Part contenido={props.part1} nroEjercicio={props.exercises1} />
    <Part contenido={props.part2} nroEjercicio={props.exercises2} />
    <Part contenido={props.part3} nroEjercicio={props.exercises3} />
  </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>{props.contenido} {props.nroEjercicio}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
     <p>Number of exercises {props.nroEjercicio1 + props.nroEjercicio2 + props.nroEjercicio3}</p> 
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