import { Outlet } from 'react-router-dom';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import '@/index.css';

const App = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default App;
