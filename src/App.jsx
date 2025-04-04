import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import Postpage from './pages/Postpage';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/projects' element={<ProjectsPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/resources' element={<ResourcesPage />} />
    <Route path='/posts/:slug' element={<Postpage />} />
  </Route>
)
  
);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
