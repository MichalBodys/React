import styles from './Lists.module.scss'
import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Lists = () => {
    const lists = useSelector(getAllLists);


    return(<section className={styles.lists}>
        <h2 className={styles.heading}>Browse lists</h2>
        {lists.map(list => (
          <Link key={list.id} to={`list/${list.id}`} className={styles.listLink}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </Link>
        ))}
      </section>)
}

export default Lists