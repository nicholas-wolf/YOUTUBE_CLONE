import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {DATA} from '../../localData'
import SearchPageCards from '../SearchPageCards/SearchPageCards';


const SearchPage = (props) => {

    const [searchResults, setSearchResults] = useState(DATA)
    const {searchQuery} = useParams()

    useEffect(() => {
        console.log(searchResults)
    }, [])


    useEffect (() => {
        const fetchVideos = async (searchQuery) => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyB2zDVfGZtdLQ4g3RO7QFmwT1RJ_kRI0Bs&type=video&part=snippet&fields=items(id,snippet)&maxResults=10`
                );
                setSearchResults(response.data)
        } catch (error) {
           console.log(error) 
        }
        }
        fetchVideos(searchQuery)
    },[])

    return(<div>
        <h1>Search Results {searchQuery} </h1>
        {searchResults.items &&
        searchResults.items.map((video) => (
          <p key={video.id.videoId}>
             {video.snippet.title}
             <a href={`/video/${video.id.videoId}`}>Watch Video</a>
          </p>
        ))}
    </div>)
}
export default SearchPage