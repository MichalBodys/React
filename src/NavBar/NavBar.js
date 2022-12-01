import styles from './NavBar.module.scss'
import Container from '../components/Container/Container'
const NavBar = () => {

    return(
    <nav >
      <Container>
        <div  className={styles.navbar}>
            <a className={styles.icon} href='/'><i className='fa fa-tasks'></i></a>
            <ul className={styles.links}>
                <li><a className={styles.link} href='/' >Home</a></li>
                <li><a className={styles.link} href='/Favorite'>Favorite</a></li>
                <li><a className={styles.link} href='/About'>About</a></li>
            </ul>
        </div>
      </Container>
    </nav>

    )

}

export default NavBar