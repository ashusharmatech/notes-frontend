import React from 'react';
import Header from './shared/Header'
import NotesList from './NotesList';

function App() {

  return (
    <>
      <Header></Header>
      <div className='container'>
        <NotesList></NotesList>
      </div>

    </>
  );
}

export default App;
