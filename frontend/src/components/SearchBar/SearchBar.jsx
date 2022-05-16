import useAuth from "../../hooks/useAuth";
import {useState} from 'react';

import axios from 'axios';



export default function SearchBar(props) {
  const [searchObject, setSearchObject] = useState('')
  const [videoData, setVideoData] = useState();
  const [user, token] = useAuth();

  async function handleSubmit(event){
    try {
          let response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?q=${searchObject}&type=video&key=AIzaSyCVVxJokbV2pHocNye7rQ3l1tV_FNbCPVU&part=snippet`
          );
          setVideoData(response.data);
        } catch (error) {
          console.log(error.message);
        }
  }
    return (
      <div>
      <div className="container">
        <form className="searchForm" onSubmit={props.handleSubmit}>
          <input
            type="text"
            name="search"
            onClick={(event) => setSearchObject(event.target.value)}
          ></input>
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
  );
}
