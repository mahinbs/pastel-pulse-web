import { Outlet } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-16 max-w-[100vw] overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />

      {/* Global WhatsApp CTA */}
      <a
        href="https://wa.me/916380974957"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] p-3 text-sm font-semibold text-white shadow-2xl shadow-[#25D366]/40 transition hover:-translate-y-0.5 hover:bg-[#1DA955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <FaWhatsapp className="h-10 w-10" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default Layout;