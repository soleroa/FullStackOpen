const App = () => {
  const Course = ({ course, header, content, parts }) => {
    return (
      <div>
        <h1 header={header}>{course}</h1>
        <p content={content}>{parts}</p>
      </div>
    );
  };
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
