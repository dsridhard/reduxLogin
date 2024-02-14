import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
// Route Component Start here
const Registration = React.lazy(() => import('./screens/Registration'))
import Login from "./screens/Login";
// import Registration from "./screens/Registration";
import Contact from "./screens/Contact";
import Result from "./screens/Result";
import ParticipantList from "./screens/ParticipantList";
import Profile from "./screens/Profile"
// Route Compenent Ends here

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Login />}></Route>

            <Route path="/registration" element={<React.Suspense fallback={<>Loading....</>}>
              <Registration />
            </React.Suspense>}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/participants" element={<ParticipantList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
