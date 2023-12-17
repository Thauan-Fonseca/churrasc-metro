import Home from './Pages/HomePage.jsx';
import styles from './App.module.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestPAge from './Pages/GuestPAge.jsx';
import ResultPage from './Pages/ResultPage.jsx';
import Form from "../src/Pages/Form.jsx"

function App() {
  return (
    <div className={styles.app}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<GuestPAge />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='result' element={<ResultPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
