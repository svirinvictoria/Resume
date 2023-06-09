import './App.css';
import {Routes, Route} from "react-router-dom";
import Resume from "./Resume/Resume";


function App() {


  return (
    <div className='container'>
        <div>
          <Routes>
            <Route path="/" Component={Resume}></Route>
            <Route path="/german" Component={Resume}></Route>
          </Routes>
        </div>
      </div>
    );
  }
        

export default App;
