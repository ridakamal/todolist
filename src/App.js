
import reactDom from 'react-dom';
import React from 'react';
import Menu from './Components/Menu';
import Page from './Components/Page';

function App() {
  return ( <>
    <div className="App">
      <Page title='My ToDo List' />
      <Page subtitle= 'For this week'  />
      </div>
      <div className= "list">
     <Menu list1="Learn React" />
      <Menu list2 = 'Learn JavaScript' />
      <Menu list3 = 'Learn Web Development' />
      <Menu list4 = 'Workout' />
      <Menu list5 = 'Meditate' />
      <Menu list6 = 'sleep' />
      <Menu list7 = 'repeat' />
      </div>
    </>
  );
}

export default App;
