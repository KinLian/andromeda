import './Banner.css';
import './App.js'
import React from 'react' ;

const Banner = (props) => {
    const item = props.attr.items ;
    /*
    const showInfo = (item) => {
        let info = [] ;
        for(let key in item) {
            info.push([key, item[key]])
        }
        console.log(info)
        info.map((info) => <li>{info}: {info[1]}</li>);
    }*/
    return (
        <div>
            <div className='Main'>
                {console.log(item)}
                <p id='Rated'>{item.Rated}</p>
                <p id='Title'>{item.Title}</p>
                <div id='Poster'>
                    <img id='PosterImage' src={item.Poster}/>
                </div>
                <div id='Info'>
                    <p>{item.Plot}</p>
                    <p>Released: {item.Released}</p>
                    <p>Production: {item.Production}</p>
                    <p>Runtime: {item.Runtime}</p>
                    <p>Genre: {item.Genre}</p>
                    <p>Director: {item.Director}</p>
                    <p>Writer: {item.Writer}</p>
                    <p>Actors: {item.Actors}</p>
                    <p>Language: {item.Language}</p>
                    <p>Country: {item.Country}</p>
                    <p>Awards: {item.Awards}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner ;