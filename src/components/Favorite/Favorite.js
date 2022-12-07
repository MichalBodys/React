import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card'
import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../../redux/store'

const Favorite = (props) => {
const cards = useSelector(state => getFavoriteCards(state, props.id))
if(!cards.length) return <div className={styles.noFavoriteCards}>You dont't have any favorite Cards</div>
    return (
        <div className={styles.div}>
            <PageTitle>Favorite</PageTitle>
                <article className={styles.favorite}>
                    {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
                </article>
        </div>

    )
}
export default Favorite