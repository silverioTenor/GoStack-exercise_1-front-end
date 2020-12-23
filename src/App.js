import React from 'react';

import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header title="Página inicial" />
      <Header title="Projetos">
        <ul>
          <li>Node.js</li>
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
      </Header>
    </>
  );
}