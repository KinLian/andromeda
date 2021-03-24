import React, {useState, useEffect} from 'react' ;
import './search.css'

function Title() {
    const [items, setItems] = useState([]);
    //const [showItems, setShowItems] = useState(false);
  
    useEffect(() => {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bb6a17a0")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result.Title);
          },
        )
    }, [])
  
    return [items] ;
  }


const Search = () => {
    const [input, setInput] = useState("") ;
    let title = Title() ;
    //let title = ['Guardian', 'Aosd', 'adsoaid'] ;

    const handleChange = (e) => {
      e.preventDefault() ;
      setInput(e.target.value);
    };

    if(input.length > 0){
      title = title.filter((i) => {
        return i.toLowerCase().match(input.toLowerCase()) ;
      })
    }
    if(input.length < 1){
      title = title.filter((i) => {
        return '' ;
      })
    }

    const showResult = title.map((title,index) => { 
      return (
        <div className='resultbar' key={index}>
          {title}
        </div>
      )
    })
    
    return (
        <div id="searcharea">
            <input type="text" placeholder="Search" onChange={handleChange} value={input}/>
            <div className='result'>
              {showResult}
            </div>
            
        </div>
    )
}

export default Search ;