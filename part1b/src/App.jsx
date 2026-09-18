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

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = ({ part1, part2, part3 }) => {
  return (
    <p>Number of units {part1.exercises + part2.exercises + part3.exercises}</p>
  );
};

const App = () => {
  const course = "The Life and Works of Rizal";

  const part1 = {
    name: "Applications Development and Emerging Technologies",
    exercises: 3,
  };

  const part2 = {
    name: "Information Management 2",
    exercises: 3,
  };

  const part3 = {
    name: "Industry Elective 1",
    exercises: 3,
  };

  const name = "Jamuel Halili Bacus";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
