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
import useAuth from "./hooks/useAuth";
import CommentPage from './pages/CommentPage/CommentPage';
import { useParams } from "react-router-dom";



function App() {
  const [user, token] = useAuth();
  const [searchObject, setSearchObject] = useState()
  const [videoData, setVideoData] = useState()
  const { video } = useParams();
  const [comments, setComments] = useState();


  async function getVideoComments(videoId){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
    setComments(response.data);
  }

  async function handleSearch(event) {
    event.preventDefault()
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchObject}&type=video&key=AIzaSyCVVxJokbV2pHocNye7rQ3l1tV_FNbCPVU&part=snippet`);
        setVideoData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    async function fetchComments(video) {
 
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/?video_id=${video}`);
        setComments(response.data);
      
      } catch (error) {
        console.log(error.message);
      }
    }
    
    console.log(defaultData)
    console.log(video)
    console.log(comments)
    
    console.log(comments)
  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage handleSearch={handleSearch} setSearchObject={setSearchObject} videoData={VIDEODATA} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage videos={relatedVideos} comments={comments} getVideoComments={getVideoComments}/>} />
        <Route path="/CommentPage/:commentId/" element={<PrivateRoute><CommentPage comments={comments}/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
