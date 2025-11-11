import React from 'react';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

const App = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
};

export default App;
