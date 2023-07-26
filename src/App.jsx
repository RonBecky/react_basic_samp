//this is the main app, here we put the components however we want them

//those are the imports of the other components
import Counter from "./components/Counter";
import MainNavbar from "./components/MainNavbar";
import Samp from "./components/samp";
import StudentList from "./components/StudentList";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>

//here we arrange them like we want
const hello = () => {
  return (
    <div>
      <MainNavbar />
      <p>press the button to see my name</p>
      <Samp />
      <br />
      <hr />
      <Counter />
      <br />
      <hr />
      <StudentList />
    </div>
  );
};
export default hello;
