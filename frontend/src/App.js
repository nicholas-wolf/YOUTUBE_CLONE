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
import { useState } from "react";
import CommentPage from './pages/CommentPage/CommentPage';
import { useParams } from "react-router-dom";



function App() {

  const [searchObject, setSearchObject] = useState()
  const { video } = useParams();
  const [comments, setComments] = useState();
  const [sim, setSim] = useState({
    
      "kind": "youtube#searchListResponse",
      "etag": "6HzbvOkHPyFYecae92-QDJHDwuU",
      "nextPageToken": "CAMQAA",
      "regionCode": "US",
      "pageInfo": {
          "totalResults": 143,
          "resultsPerPage": 3
      },
      "items": [
          {
              "kind": "youtube#searchResult",
              "etag": "xtKuO9f3s00l263akTKdCDc0RKg",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "8M9Ack29DCI"
              },
              "snippet": {
                  "publishedAt": "2022-05-14T00:24:00Z",
                  "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
                  "title": "Tucker: They are hoarding baby formula",
                  "description": "Fox News host voices his concerns over the baby formula shortage on 'Tucker Carlson Tonight.' #FoxNews #Tucker\n\nSubscribe to Fox News! https://bit.ly/2vaBUvAS\nWatch more Fox News Video: http://video.foxnews.com\nWatch Fox News Channel Live: http://www.foxnewsgo.com/\n\nFOX News Channel (FNC) is a 24-hour all-encompassing news service delivering breaking news as well as political and business news. The number one network in cable, FNC has been the most-watched television news channel for 18 consecutive years. According to a 2020 Brand Keys Consumer Loyalty Engagement Index report, FOX News is the top brand in the country for morning and evening news coverage. A 2019 Suffolk University poll named FOX News as the most trusted source for television news or commentary, while a 2019 Brand Keys Emotion Engagement Analysis survey found that FOX News was the most trusted cable news brand. A 2017 Gallup/Knight Foundation survey also found that among Americans who could name an objective news source, FOX News was the top-cited outlet. Owned by FOX Corporation, FNC is available in nearly 90 million homes and dominates the cable news landscape, routinely notching the top ten programs in the genre.\n\nWatch full episodes of your favorite shows\nThe Five: http://video.foxnews.com/playlist/longform-the-five/\nSpecial Report with Bret Baier: http://video.foxnews.com/playlist/longform-special-report/\nFox News Primetime: https://video.foxnews.com/playlist/on-air-fox-news-primetime/\nTucker Carlson Tonight: http://video.foxnews.com/playlist/longform-tucker-carlson-tonight/\nHannity:  http://video.foxnews.com/playlist/longform-hannity/\nThe Ingraham Angle: http://video.foxnews.com/playlist/longform-the-ingraham-angle/\nFox News @ Night: http://video.foxnews.com/playlist/longform-fox-news-night/\n\nFollow Fox News on Facebook: https://www.facebook.com/FoxNews/\nFollow Fox News on Twitter: https://twitter.com/FoxNews/\nFollow Fox News on Instagram: https://www.instagram.com/foxnews/",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/8M9Ack29DCI/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/8M9Ack29DCI/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/8M9Ack29DCI/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "Fox News",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-05-14T00:24:00Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "7pmk27wf40l-A9wj5p2J9s40Tvs",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "bEWdAYvANcc"
              },
              "snippet": {
                  "publishedAt": "2022-04-13T15:18:07Z",
                  "channelId": "UCzQUP1qoWDoEbmsQxvdjxgQ",
                  "title": "Trying to Survive in Prison as a First Time Offender",
                  "description": "Taken from MMA Show #121 w/Bobby Green:\nhttps://open.spotify.com/episode/35n2OENdL2Z0SQLJOTSMND?si=15d80500425945f0",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/bEWdAYvANcc/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/bEWdAYvANcc/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/bEWdAYvANcc/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "PowerfulJRE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-04-13T15:18:07Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "nh1A-d6rQtANcdS4DVTZTN_mAUE",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "dO26RPpbbbM"
              },
              "snippet": {
                  "publishedAt": "2022-05-17T10:44:27Z",
                  "channelId": "UCCXoCcu9Rp7NPbTzIvogpZg",
                  "title": "Elon Musk throws another Twitter takeover curveball",
                  "description": "The Tesla founder and CEO tweeted overnight he needs Twitter to come clean on fake accounts before taking full ownership of the platform. #FOXBusiness\n\nSubscribe to Fox Business! https://bit.ly/2D9Cdse\nWatch more Fox Business Video: https://video.foxbusiness.com\nWatch Fox Business Network Live: http://www.foxnewsgo.com/\n\nFOX Business Network (FBN) is a financial news channel delivering real-time information across all platforms that impact both Main Street and Wall Street. Headquartered in New York — the business capital of the world — FBN launched in October 2007 and is one of the leading business networks on television, having topped CNBC in Business Day viewers for the second consecutive year in 2018. The network is available in nearly 80 million homes in all markets across the United States. Owned by FOX Corporation, FBN is a unit of FOX News Media and has bureaus in Chicago, Los Angeles, and Washington, D.C.\n\nFollow Fox Business on Facebook: https://www.facebook.com/FoxBusiness\nFollow Fox Business on Twitter: https://twitter.com/foxbusiness\nFollow Fox Business on Instagram: https://www.instagram.com/foxbusiness",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/dO26RPpbbbM/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/dO26RPpbbbM/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/dO26RPpbbbM/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "Fox Business",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-05-17T10:44:27Z"
              }
          }
      ]
  }
  );

    
  async function fetchSim(video) {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&maxResults=10&key=AIzaSyC7zKiEyRffpHACw6-bAylIosWEBIjc7QY&part=snippet`);

      console.log(response.data);
      setSim(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  

  console.log(video)
  console.log(sim);

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
        <Route path="/VideoPage/:video/" element={<PrivateRoute><VideoPage videoData={VIDEODATA}  comments={comments} setComments={setComments} sim={sim} fetchComments={fetchComments} fetchSim={fetchSim}  /></PrivateRoute>} />
        <Route path="/CommentPage/:commentId/" element={<PrivateRoute><CommentPage comments={comments}/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
