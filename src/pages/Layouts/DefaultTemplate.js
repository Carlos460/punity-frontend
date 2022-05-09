import React from 'react';
// Components
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

function DefaultTemplate(props) {
  return (
    <main>
      <NavigationBar />
      {props.children}
      <Footer />
      <style jsx global>{`
        :root {
          --primary-color: #fab95b;
        }
        html,
        body {
          scroll-behavior: smooth;
        }
        * {
          margin: 0rem;
          padding: 0rem;
          box-sizing: border-box;
        }
      `}</style>
    </main>
  );
}

export default DefaultTemplate;
