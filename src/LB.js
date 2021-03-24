import './App.js'
import './LB.css'
import React from 'react' ;

const LB = (props) => {
    const L = props.L ;
    const B = props.B ;
    const showL = L.map((L) => 
        <div id='LC'>
            <img id='LP' src={L.items.Poster}/>
            <p id='LT'>{L.items.Title}</p>
        </div>);

    const showB = B.map((B) => 
        <div id='BC'>
            <img id='BP' src={B.items.Poster}/>
            <p id='BT'>{B.items.Title}</p>
        </div>);
    return (
        <div className='Main'>
            <div id='L' >
                <p id='LH'>Liked Videos</p>
                <div id='LL'>
                    {showL}
                </div>
            </div>
            <div id='B'>
                <p id='BH'>Bookmarked Videos</p>
                <div id='BL'>
                    {showB}
                </div>
            </div>
        </div>
    )
}

export default LB ;