import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-containers'>
            <h1 className='home-title'>WELCOME TO AGRISCAN</h1>
            <p className='home-text'>Preserving the fields of tomorrow <br /> Crop disease prediction for sustainable farming.</p>
            <Link to="/dashboard" class="btn btn:hover">Dashboard</Link>
        </div>
    );
};

export default Home;