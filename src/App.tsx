import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Router/AppRouter';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 py-12">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
