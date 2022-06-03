import styles from './Header.module.scss';
import IgniteLogo from '../../assets/ignite-logo.svg'

function Header(){
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="logotipo do ignite" />
            <span>Ignite Feed</span>
        </header>
    )
}


export { Header }