import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Layout({ title }) {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Header title={title} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
