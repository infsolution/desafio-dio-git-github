import React from 'react';
import { Layout } from './components/layout';
import { Profile } from './components/profile';
import { Repositories } from './components/repositories';
import './App.css';

function App() {
  return (
    <Layout>
        <Profile/>
        <Repositories/>
    </Layout>
  );
}

export default App;
