import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EmptyPge from './component/EmptyPge';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
// json-server --watch ./src/db/data.json --port 3001

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />}/>
          <Route path='/create_word' element={<CreateWord />}/>
          <Route path='/create_day' element={<CreateDay />}/>
          <Route path='*' element={<EmptyPge/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
