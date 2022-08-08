import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
//'usestate': utilizado para poder gerenciar os estados dos filmes;
//'useEffect': utilizado para fazer a chamada da API quando a página carregar

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => { //Irá chamar os filmes via API (pelo link)
        const res = await fetch(url); //Vai ter uma resposta baseada no 'await'
        const data = await res.json(); //Tranforma esses dados recebidos em um array de JavaScript
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; //Montou-se uma url para poder acessar os filmes melhores avaliados
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl); //Faz a chamada de Fetch
    }, []);

    //console.log(topMovies);

    return ( //Se 'topMovies' tiverem preenchidos, imprime os títulos do filmes
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default Home;