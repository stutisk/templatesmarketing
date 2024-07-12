import "./App.css";
import { DailyDealsCreative } from "./Pages/DailyDealsCreative";
import { Email } from "./Pages/Email";
import { Homepage } from "./Pages/Homepage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { StoryDealsCreative } from "./Pages/StoryDealsCreative";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/email" element={<Email />} />
        <Route path="/dailyDeals" element={<DailyDealsCreative />} />
        <Route path="/storyDeals" element={< StoryDealsCreative />} />
      </Routes>
       </BrowserRouter>
      

    
    </div>
  );
}

export default App;
