import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const Card = ({title, id, isFavorite }) => {

const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCardFavorite(id, isFavorite))
        console.log('KLIK');
    }


    return (
        <li className={styles.card}>{title}
            <button onClick={toggle} className={clsx(styles.starButton, isFavorite && styles.active)}>
                <span className='fa fa-star-o'></span>
            </button>
        </li>
    );
}

export default Card
