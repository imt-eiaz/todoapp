import Header from "./components/Header";
import Todo from "./components/Todo";
import Greet from "./components/Greet";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Todo />
        {/* <Greet name="Imtiaz" heroName=" Aslam Khan" /> */}
      </div>
    </>
  );
}

export default App;
