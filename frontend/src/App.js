// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { VIDEODATA } from "./VideoData";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  const [suggestedVideos, setSuggestedVideos] = useState(VIDEODATA);
  const [relatedVideos, setRelatedVideos] =useState(VIDEODATA);
  const [comments, setComments] = useState([])
  const [searchedVideos, setSearchedVideos] = useState([])


  async function getVideoComments(videoId){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
    setComments(response.data);
  }

  async function searchVideos(searchQuery){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyDhfnwEvEuZjfnIgfxvbAKgZW-XvFnd2Xc&type=video&part=snippet&fields=items(snippet)&maxResults=10`)
    setSearchedVideos(response.data)
    console.log('sv', searchedVideos)
  }
  return (
    <div>
      
      <Navbar />
      <SearchBar submitSearch={searchVideos}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos={suggestedVideos}/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage videos={relatedVideos} comments={comments} getVideoComments={getVideoComments}/>} />
        <Route path="/results" element={<SearchPage videos={searchedVideos}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
