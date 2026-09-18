const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Footer = ({ name, courseCode, section }) => {
  return (
    <p>
      {name} - {courseCode} - {section}
    </p>
  );
};

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of units {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = "The Life and Works of Rizal";

  const part1 = "Applications Development and Emerging Technologies";
  const exercises1 = 3;

  const part2 = "Information Management 2";
  const exercises2 = 3;

  const part3 = "Industry Elective 1";
  const exercises3 = 3;

  const name = "Jamuel Halili Bacus";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
