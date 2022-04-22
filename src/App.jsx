import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todos from "./Components/Todos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import style from "./styles/globals.module.css";
const App = () => {
  return (
    <Provider store={store}>
      <div className={style.body}>
        <Header />
        <main className={style.main}>
          <Todos />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
