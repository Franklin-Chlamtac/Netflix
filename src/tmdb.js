const API_KEY ="63c7933ad84eea4628f70cfd858a2d6f";
const API_BASE = "https://api.themoviedb.org/3";



const basicFetch = async (endpoint)=>{
    const require = await fetch(`${API_BASE}${endpoint}`)
    const json = await require.json();
    return json;
}


export default {
    getmovieLists: async ()=>{
        return[
            {
                name: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },          
            {
                name: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                name: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&languages=pt-BR&api_key=${API_KEY}`)
            },
            {
                name: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&languages=pt-BR&api_key=${API_KEY}`)
            },
            
            {
                name: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&languages=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}