import './App.css';
import React, {useState, useEffect} from 'react' ;
import Like from './icon/Like.png'
import Bookmark from './icon/Bookmark.png'
import Search from './tools/search'
import Banner from './Banner.js'
import LB from './LB.js'

function MyComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bb6a17a0")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])

  return {items}
}

function App() {
  let x = MyComponent();

  const [liked, setLiked] = useState([]) ;
  const [bookmarked, setBookmarked] = useState([])
  const [showLike, setShowLike] = useState(false) ;

  const likeColor = liked.some(liked => liked.Title === x.Title) && <div id='LColor'></div>
  const bookmarkColor = bookmarked.some(bookmarked => bookmarked.Title === x.Title) && <div id='BColor'></div>
  const changeLike = () => {setShowLike(!showLike)}
  const checkLike = () => {
    for(let i = 0 ; i < liked.length ; i+=1) {
      if(liked[i].items == x.items) {
        setLiked(liked.filter((e)=>(e === x)));
        return ;
      }
    }
    setLiked(liked => [...liked, x]) ;
  }
  const checkBookmark = () => {
    for(let i = 0 ; i < bookmarked.length ; i+=1) {
      if(bookmarked[i].items === x.items) {
        setBookmarked(bookmarked.filter((e)=>(e === x)));
        return ;
      }
    }
    setBookmarked(bookmarked => [...bookmarked, x]) ;
  }
  
  const toggleShowLike = showLike && 
  <div id='LB'>
    <LB L={liked} B={bookmarked}/>
  </div>

  return (
    <div className="App">
      <header> 
        <div id='Liked' onClick={changeLike}>Liked</div>
      </header>

      <Search/>

      <div id='mainContent'>
        <Banner attr={x}/>
        {likeColor}
        <img id='Like' src={Like} onClick={checkLike} />
        {bookmarkColor}
        <img id='Bookmark' src={Bookmark} onClick={checkBookmark}/>
      </div>
      <div id='LikeAndBookmark'>
        {toggleShowLike}
      </div>
    </div>
  );
}

export default App;
