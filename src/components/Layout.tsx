import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 md:pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;