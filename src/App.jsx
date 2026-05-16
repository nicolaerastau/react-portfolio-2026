// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// import Navbar from '@/layout/Navbar';
// import Footer from '@/layout/Footer';
// import About from '@/sections/About';
// import Projects from '@/sections/Projects';
// import Contact from '@/sections/Contact';
// import './index.css';

// function App() {
//   return (
//     <div className="portfolio-container">
//       <Navbar />
//       <main>
//         <About />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer>
//         <p>© {new Date().getFullYear()} - Built with React</p>
//       </Footer>
//     </div>
//   );
// }

import { Outlet } from 'react-router-dom';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import '@/index.css';

const App = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   // Check if the user is already on the home page to avoid infinite routing loops
  //   if (location.pathname !== '/') {
  //     navigate('/', { replace: true });
  //   }
  // }, [navigate, location.pathname]); // Fires exactly once when the application boots up/reloads

  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        {/* Active child routes will render right here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default App;
