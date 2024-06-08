import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import SearchTask from './components/SearchTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewTask from './components/ViewTask';
import DeleteTask from './components/DeleteTask';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTask/>}/>
        <Route path='/search' element={<SearchTask/>}/>
        <Route path='/delete' element={<DeleteTask/>}/>
        <Route path='/viewall' element={<ViewTask/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
