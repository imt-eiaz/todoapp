import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Todo />
        {/* <Student name="Imtiaz" age={40} isReg={true} /> */}
      </div>
    </>
  );
}

export default App;
