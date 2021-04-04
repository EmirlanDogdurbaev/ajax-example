import { useEffect, useState } from "react";
import "./App.css";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import FullPosts from "./components/FullPosts/FullPosts";
import Pictures from "./components/Pictures/Pictures";
import Posts from "./components/Posts/Posts";
function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  let pictures = "Select a album";
  if (setSelectedAlbum) {
    pictures = <Pictures albumId={selectedAlbum} />;
  }
  const [selectedComment , setSelectedComment] = useState(0);

  return (
    <div className="App">
  
      <Posts />
      
     <Comments setSelectedComment={setSelectedAlbum}/>
      <FullPosts /> 
      <Albums setSelectedAlbum={setSelectedAlbum} />
      {pictures}
    </div>
  );
}
export default App;
