import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from './Home'
import {MealDetails} from './MealDetails'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/MealsDetails/{id}' element={<MealDetails />} />
    </Routes>
  );
}

export default App;
