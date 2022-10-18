import './App.css';
import { Route, Routes } from 'react-router-dom';
import Questions from './componants/questions/Questions';
import Home from './componants/Pages/Home';
import QuestionOne from './componants/Pages/QuestionOne';
import Header from './componants/Pages/Shared/Header';
import Music from './componants/questions/Music';
import QuestionTwo from './componants/Pages/QuestionTwo';
import QuestionThree from './componants/Pages/QuestionThree';

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recommended' element={<Questions/>}></Route>
        <Route path='/q2' element={<QuestionOne/>}></Route>
        <Route path='/q3' element={<QuestionTwo/>}></Route>
        <Route path='/q4' element={<QuestionThree/>}></Route>

        <Route path='/music' element={<Music/>}></Route>

        
      </Routes>
     
    </div>
  );
}

export default App;
