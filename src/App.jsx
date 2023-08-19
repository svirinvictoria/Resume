
import {Routes, Route, Navigate} from "react-router-dom";
import Resume from "./Resume/Resume";
import ErrorPage from './Resume/ErrorPage';

function App() {
  return (
    <div className='container'>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/de"replace/>}></Route>
              <Route path="/en" element={<Resume/>}></Route>
              <Route path="/de" element={<Resume/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
          </Routes>
        </div>
      </div>
    );
  }
        

export default App;
