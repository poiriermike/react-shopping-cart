import React, { PropTypes } from 'react';
import styles from './SongList.css';

const eachSong = ({ album, name }) => {
  const albumImage = album.images[0];
  return (
    <div className={styles.eachSong}>
      <img role="presentation" src={albumImage.url} className={styles.image} />
      <span className={styles.songDescription}>Name: {name}</span>
    </div>
  );
};


const SongList = (props) => (
  <div className={styles.root}>
    {props.listOfSongs.map((songData, index) => <div
      key={songData.uri}
      onClick={() => props.selectSong(index)}
    >{eachSong(songData)}</div>)}
  </div>
);


eachSong.propTypes = {
  album: PropTypes.object,
  name: PropTypes.string,
};

SongList.propTypes = {
  listOfSongs: PropTypes.array,
  selectSong: PropTypes.func,
};

export default SongList;
