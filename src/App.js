import BtnCalc from "./components/BtnCalc";
import Header from "./components/Header";
import ModalPeople from "./components/ModalPeople";
import styles from './App.module.css'
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Calculator />
      <div>
        <BtnCalc />
      </div>
      
    </div>
  );
}

export default App;
