import './App.css';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {Users} from '../src/pages/user/users'
import {UserPost} from '../src/pages/UserPost/UserPost'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/post/:id' element={<UserPost/>}>
        <Route path="comments" element={<p>comment</p>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
