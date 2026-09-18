const Header = ({ course }) => {
  return (
    <header className="bg-blue-600 py-6 text-center text-white">
      <h1 className="text-3xl font-bold">{course.name}</h1>
    </header>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
      <span className="text-gray-800">{name}</span>

      <span className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
        {exercises} units
      </span>
    </p>
  );
};

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer className="bg-gray-800 py-5 text-center text-sm text-gray-300">
      {name} - {courseCode} - {section}
    </footer>
  );
};

const Content = ({ parts }) => {
  return (
    <div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow-sm">
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p className="mt-5 text-center text-gray-700">
      Number of units:{" "}
      <span className="font-bold text-gray-900">
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </span>
    </p>
  );
};

const App = () => {
  const course = {
    name: "The Life and Works of Rizal",
    parts: [
      {
        name: "Applications Development and Emerging Technologies",
        exercises: 3,
      },
      {
        name: "Information Management 2",
        exercises: 3,
      },
      {
        name: "Industry Elective 1",
        exercises: 3,
      },
    ],
  };

  const name = "Jamuel Halili Bacus";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div className="flex min-h-screen flex-col">
      <Header course={course} />

      <main className="flex flex-1 flex-col items-center justify-center">
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </main>

      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
