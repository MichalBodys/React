import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import {getAllColumns, getAllLists, getListById} from '../../redux/store'



const List = (props) => {

  const columns = useSelector(getAllColumns);
  const lists = useSelector(getAllLists)

  // const listData = useSelector(state => getListById(state, listId));

	return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{lists[0].title}</h2>
      </header>
      <p className={styles.description}>{lists[0].description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;