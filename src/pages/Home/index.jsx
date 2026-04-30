import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <>
        <Link to="/Exer1">
        <button >Exercicio 1</button>
        </Link>

        <Link to="/Exer2">
        <button>Exercicio 2</button>
        </Link>
        </>
    )
}

export default Home