import React from 'react'
import Cbox from './Cbox'


function App() {
  return (
    <div>
     <Cbox
     color='pink'
     content='Hello World'/>
     <Cbox
     color='yellow'
     content='height:100px'/>
     <Cbox
     color='red'
     content='goodbye'/>
     <Cbox content='aloha again' color='purple'/>

    </div>
  );
}

export default App;
