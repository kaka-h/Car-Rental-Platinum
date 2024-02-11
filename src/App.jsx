import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { routes as LandingRoutes } from '@/modules/Landing/routes';
import { routes as AdminRoutes } from '@/modules/Admin/routes';
import { useRoutes } from 'react-router-dom';

function App() {
  let route = useRoutes([...LandingRoutes, ...AdminRoutes])
  return route
}

export default App;
