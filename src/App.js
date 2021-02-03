
import './App.css';
 
import NavBar from './components/navbar'
import Profile from './components/profile.js'


function App() {

  return (
    <div className="App">
      <NavBar/>
      
       {/* <img src="prof.jpg" alt="profile"  style={style}/> */}
       <Profile/>
    </div>
  );
}

export default App;
