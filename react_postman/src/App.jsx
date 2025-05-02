
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/footer';
import Navigation from './components/Navigation';

function App() {   
const routes = useRoutes([
  { path: "/", element: <Home /> },
]);
  
  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App
