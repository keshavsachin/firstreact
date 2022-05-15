import logo from './logo.svg';
import './App.css';

function App() {

  function Addition() {
    let value1=190
    return(
      <div className='App'>
        <h1>hello from addition</h1>
        <h1>{value1}</h1>

      </div>
    );
  }
  let value=30

  return (
   <div className='App'>
     <h1>Hello World</h1>
     <h1>{value}</h1>
     <Addition/>
   </div>
  );
}

export default App;
