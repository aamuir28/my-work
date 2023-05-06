import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Confirmation from "./components/Confirmation";
import Error from "./components/Error";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import CommentForm from "./components/CommentForm";
import Grogu from "./components/Grogu";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Mandalorian2 from "./components/Mandalorian2";

function App() {
  return (
    <div className="container">
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/add" element={<CommentForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/error" element={<Error />} />
        <Route path="/mandalorian" element={<Mandalorian2 />} />
        <Route path="/grogu" element={<Grogu />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/add" element={<CommentForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
