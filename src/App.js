import { Box } from "@mui/material"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Sloka from "./Components/Sloka";
import SingleGeetaVerse from "./Components/SingleGeetaVerse";
import GitaGPT from "./Components/GitaGPT";
import Login from "./Components/Login";



function App() {
  
  return (
    <Box sx={{backgroundColor : "#000"}} minHeight="100vh">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/sloka/:chapter_number" element={<Sloka/>}/>
        <Route path="/singlegeetaverse/:verse_number" element={<SingleGeetaVerse/>}/>
        <Route path="/gitagpt" element={<GitaGPT/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </Box>
    
  );
}

export default App;
