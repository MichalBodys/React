import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, deleteCard } from '../../redux/CardRedux';


const Card = ({title, id, isFavorite }) => {

const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCardFavorite(id, isFavorite))
        console.log('KLIK');
    }

    const remove = () => {
        dispatch(deleteCard(id))
    }


    return (
        <li className={styles.card}>{title}
            <div className={styles.buttons}>
                <button onClick={toggle} className={clsx(styles.star , isFavorite && styles.active)}>
                    <i className='fa fa-star-o'/>
                </button>
                <button className={styles.remove} onClick={remove} >
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default Card
