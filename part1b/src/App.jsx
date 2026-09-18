const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Footer = ({ name, courseCode, section }) => {
  return (
    <p>
      {name} - {courseCode} - {section}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of units{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = "The Life and Works of Rizal";

  const parts = [
    {
      name: "Applications Development and Emerging Technologies",
      exercises: 3,
    },
    { name: "Information Management 2", exercises: 3 },
    { name: "Industry Elective 1", exercises: 3 },
  ];

  const name = "Jamuel Halili Bacus";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
