import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config/routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 py-12">
        {/* <HomePage /> */}

        {/* test */}
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Routes>

        {/* test// */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
