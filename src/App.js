import './App.css';
import { Navbar } from './Components/Navbar';
import { SocialMedia } from './Components/SocialMedia';
import { Home } from './Components/Home';
import { Blogs } from './Components/Blogs';

function App() {
  return (
    <div>
        <SocialMedia/>
        <Navbar />
        <Home />
        <Blogs />
    </div>
  );
}

export default App;
