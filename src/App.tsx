import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 py-12">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
