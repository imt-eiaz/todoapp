// import styles from "./student.module.css";
// import PropTypes from "prop-types";
// import PropTypes from "prop-types";

import "../App.css";

export default function Student(props) {
  return (
    <div
      // className={styles.student}
      className="student"
    >
      {/* <h1>Student Record</h1> */}
      <p>Name : {props.name}</p>
      <p> age : {props.age}</p>
      <p> Registered : {props.isReg ? "Yes" : "No"}</p>
    </div>
  );
}

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isReg: PropTypes.bool,
// };

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isReg: false,
};
