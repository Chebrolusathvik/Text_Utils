import './App.css';
import Navbar from './navbar'
import Form from './form'

function App() {
  return (
    <>
   <Navbar/>
   <div className='container'>
   <Form  heading="Enter The Text To Analyse" />
   </div>
    </>
  );
}

export default App;
