import { Header } from './components/Header';


import styles from './styles/App.module.scss';
import './styles/global.scss';

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>main</main>
      </div>

    </div>
  )
}

export default App
