import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
    <header><Header/></header>
    <main className= 'App-content'><Content/></main>
    <Footer/>
    </>
  );
}

export default App;
