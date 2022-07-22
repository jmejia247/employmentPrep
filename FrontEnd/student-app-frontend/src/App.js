
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StudentList from './components/studentList/StudentList';
import StudentDetailPage from './pages/StudentDetailPage';

import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/students/:studentId" element={<StudentDetailPage />} />
              <Route path="/" element={<StudentList />} /> 
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
