import styles from './Header.module.css'
import igniteSymbol from '../assets/Ignite simbol.svg';


export function Header() {
    return (
        <header className= {styles.header}>
            <img src= {igniteSymbol} alt="" />
            <strong>
                Ignite Feed
            </strong>
        </header>
    )
}