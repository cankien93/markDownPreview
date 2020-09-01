import React from 'react';
import './App.css';
import Editor from './components/editor/Editor';
import Preview from './components/preview/preview.component'
const App = () => {
  const [input, setInput] = React.useState('# This is a header\n\nAnd this is a paragraph');
  const onChange = event => {
    console.log('change')
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <Editor onChange={onChange} input={input}/>
      <Preview input={input}/>
    </div>
  );
}

export default App;
