import "./info.scss";

const Info = ({ text }) => {
  return (
    <>
      <p>{text}</p>
      <ul className="cv__information">
        <li>Strong knowledge in HTML, CSS, and JavaScript, including advanced topics such as Scopes, Classes, Prototypes, Asynchronous programming, ES6, and Environment Setup with NPM.</li>
        <li>Experience with CSS preprocessors like SASS and familiarity with the BEM methodology for writing modular and maintainable CSS code.</li>
        <li>Knowledge of JavaScript tools and libraries such as Webpack, ESLint, and client-side data storage techniques.</li>
        <li>Experience with Test-Driven Development (TDD) practices to ensure high code quality.</li>
        <li>Understanding of the Critical Rendering Path and techniques for optimizing web performance, as well as Web Components and their integration into projects.</li>
        <li>Familiarity with Web Workers, Service Workers, and techniques for web optimization.</li>
        <li>Proficiency in strongly typed programming language TypeScript and hands-on experience with frameworks like React and state management tool Redux.</li>
        <li>Comfortable with Agile methodologies, participated in Sprint Daily Scrum Meetings, Planning, Sprint Review, Sprint Retrospective and Backlog Refinement.</li>
      </ul>
    </>
  );
};

export default Info;
