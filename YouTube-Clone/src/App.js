import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetail from './components/VideoDetail'

function App() {
  return (
    
    <AppContext>
        <BrowserRouter>
          <div className=" flex flex-col h-full" >
            <Header/>
            <Routes>
              <Route path="/" exact element={<Feed/>} />
              <Route path="/search/:searchQuery" element={<SearchResult/>} />
              <Route path="/video/:id" element={<VideoDetail/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </AppContext>
  );
}

export default App;
