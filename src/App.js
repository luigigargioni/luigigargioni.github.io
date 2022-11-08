import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/projects" exact element={<ProjectPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <BackToTop />
    </>
  );
}

export default App;
