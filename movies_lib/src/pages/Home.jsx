import { useState, useEffect } from 'react';
//'usestate': utilizado para poder gerenciar os estados dos filmes;
//'useEffect': utilizado para fazer a chamada da API quando a página carregar

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => { //Irá chamar os filmes via API (pelo link)
        const res = await fetch(url); //Vai ter uma resposta baseada no 'await'
        const data = await res.json(); //Tranforma esses dados recebidos em um array de JavaScript
    
        console.log(data);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; //Montou-se uma url para poder acessar os filmes melhores avaliados
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div>Home</div>
    );
}

export default Home;