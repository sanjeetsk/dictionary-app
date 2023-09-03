import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import History from "./Components/History"
import WordDetails from "./Components/WordDetails"

const App = () => {
    return(
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/history' element={<History />} />
            <Route path='/word/:word' element={<WordDetails />} />
          </Routes>
      </div>
    )
}

export default App