
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import { Route,Routes } from "react-router-dom";
import AddMovie from "./Component/AddMovie";
function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/addmovie" element={<AddMovie/>}/>
     </Routes>
    </div>
  );
}

export default App;
