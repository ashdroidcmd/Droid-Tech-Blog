import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import Postpage from './pages/Postpage';
import ScrollToTop from './components/ScrollToTop';
// import AddProject from './pages/AddProject'

function App() {
  return (
    // <>
    // <AddProject />
    // </>
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/posts/:slug" element={<Postpage />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
