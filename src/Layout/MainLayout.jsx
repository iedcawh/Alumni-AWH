import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet /> {/* Nested pages render here */}
      </main>
      <Footer />
    </div>
  );
}
