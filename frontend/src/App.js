// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
// import { VIDEODATA } from "./VideoData";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchPage from "./pages/SearchPage/SearchPage";


// Component Imports
// import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";



function App() {
  // const [suggestedVideos, setSuggestedVideos] = useState(VIDEODATA);
  // const [relatedVideos, setRelatedVideos] =useState(VIDEODATA);
  const [comments, setComments] = useState([])
  const [searchedVideos, setSearchedVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')
  const navigate = useNavigate()
  const NotFound = () =>{
    return(
      <div>Page Not Found</div>
    )
  }
  
  
  async function getVideoComments(videoId){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
    setComments(response.data);
  }

  async function searchVideos(searchQuery){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyCfPLmQ1ubB2YNNMkYwmhfhzLpQEkEfUtE&type=video&part=snippet&fields=items(id,snippet)&maxResults=9`)
    setSearchedVideos(response.data.items)
  }

    function pickVideo(id) {
      let result = searchedVideos.filter((el) => {
        if(el.id.videoId === id){
          return true;
        }
        else{
          return false;
        }
      })
      setSelectedVideo(result[0])
    }
  
  return (
    <div>
      <SearchBar submitSearch={searchVideos}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage   videos={searchedVideos}  /> 
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage selectedVideo={selectedVideo} comments={comments} getVideoComments={getVideoComments}/>} />
        <Route 
          path="/results"  
          element={
            <PrivateRoute>
              <SearchPage videos={searchedVideos} submitVideoInfo={pickVideo} setSelectedVideo={setSelectedVideo}  />
            </PrivateRoute>
          }
          />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
