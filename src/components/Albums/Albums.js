import classes from "./Albums.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Albums = ({ setSelectedAlbum }) => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const albums = response.data;
        const only5albums = albums.slice(0, 5);
        setAlbums(only5albums);
      });
  }, []);
  const results = albums.map((album) => (
    <div key={album.id} onClick={() => setSelectedAlbum(album.id)}>
      <h2>{album.title}</h2>
    </div>
  ));
  return <div className={classes.Albums}>{results}</div>;
};
export default Albums;
