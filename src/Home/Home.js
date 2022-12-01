import Hero from '../components/Hero/Hero'
import SearchForm from '../components/SearchForm/SearchForm'
import List from '../components/List/List'

const Home = () => {
    return(
        <main>
            <Hero />
            <SearchForm />
            <List/>
        </main>
    )
}

export default Home