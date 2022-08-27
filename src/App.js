import react, {useEffect, useState} from "react";
import Tmdb from "./tmdb.js";
import Rows from "./components/MovieRow.js";
import "./App.css";


export default()=>{


    const [movieList, setMovieList] = useState([]);


    useEffect(()=>{
        const loadAll = async()=> {
            let list = await Tmdb.getmovieLists();
            setMovieList(list);

        }
        loadAll();

    }, []);
    return (
        <div className="page">
            
            <section className="lists">
              {movieList.map((item,key)=>(
                <Rows key={key} title={item.title} items={item.items}/>
              ))}  
            
            </section> 
        </div>
    );
}