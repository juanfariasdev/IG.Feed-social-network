import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import styles from './styles/App.module.scss';
import './styles/global.scss';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>main</main>
      </div>

    </div>
  )
}

export default App
