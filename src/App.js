import "./App.css";
import AdCarousels from "./components/AdCarousels";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Product from "./components/Product";



function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="inner_body">
        <HeaderMenu />
        <AdCarousels />
        <Product />
      </div>

    </div>
  );
}

export default App;
