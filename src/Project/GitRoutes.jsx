import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GitHomepage from './GitHomepage';
import Issues from'./Issues';
import Comment from './Comment';

const GitRoutes = () => {
  return (
   <>
    <Routes>
      <Route path="/" element={<GitHomepage/>} />
      <Route path="/issues" element={<Issues/>} />
      <Route path="/commentpage" element={<Comment/>} />
    </Routes>
   </>
  )
}

export default GitRoutes
