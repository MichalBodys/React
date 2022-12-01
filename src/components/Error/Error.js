import PageTitle from '../PageTitle/PageTitle'
import styles from './Error.module.scss'

const Error = () => {
    return(
        <div className={styles.body}>
            <PageTitle>Oops</PageTitle>
            <p>Something went Wrong</p>
            <a className={styles.link} href='/' >Go Home</a>
        </div>
    )
}

export default Error