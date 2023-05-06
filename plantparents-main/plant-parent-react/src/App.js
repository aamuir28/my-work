// react and dependencies
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//contexts and services
import AuthContext from "./contexts/AuthContext";
import { refresh } from "./services/authService";

// components
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Community from "./components/Community";
import Speciess from "./components/Speciess";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import UnexpectedError from "./components/UnexpectedError";
import CommunityDetail from "./components/CommunityDetail";
import SpeciesForm from "./components/SpeciesForm";
import ConfirmDeleteSpecies from "./components/ConfirmDeleteSpecies";
import ConfirmDeletePlot from "./components/ConfirmDeletePlot";
import AddCommunity from "./components/AddCommunity";
import AddGardener from "./components/AddGardener";
import AddPlot from "./components/AddPlot";
import PlotDetail from "./components/PlotDetail";
import Search from "./components/Search";
import Error from "./components/Error";
import Unauthorized from "./components/Unauthorized";
import FooterNav from "./components/FooterNav";
import Plants from "./components/Plants";
import ConfirmDeletePlant from "./components/ConfirmDeletePlant";
import ConfirmDeleteCommunity from "./components/ConfirmDeleteCommunity";
import ConfirmDeleteGardener from "./components/ConfirmDeleteGardener";
import Register from "./components/Register";
import GardenerForm from "./components/GardenerForm";
import AddPlantForm from "./components/AddPlantForm";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    refresh().then(login).catch(logout);
  }, []);

  function login(userArg) {
    setUser(userArg);
    localStorage.setItem("PP_JWT", userArg.jwt);
  }

  function logout() {
    setUser();
    localStorage.removeItem("PP_JWT");
  }

  const auth = {
    user,
    login,
    logout,
  };

  function renderWithCredentials(Element, ...authorities) {
    if (user && user.hasAnyAuthority(...authorities)) {
      return <Element />;
    }
    return <Unauthorized />;
  }

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Header />
        <NavBar />
        <Search />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Community" element={renderWithCredentials(Community, "USER", "ADMIN")} />
          <Route path="/Community/add" element={renderWithCredentials(AddCommunity, "ADMIN")} />
          <Route path="/Community/:communityId"element={renderWithCredentials(CommunityDetail, "USER", "ADMIN")} />
          <Route path="/Community/delete/:id"element={renderWithCredentials(ConfirmDeleteCommunity, "ADMIN")} />
          <Route path="/Community/:communityId/AddPlot" element={renderWithCredentials(AddPlot, "ADMIN")} />
          <Route path="/Community/:communityId/viewplot/:plotId" element={renderWithCredentials(PlotDetail, "USER", "ADMIN")} />
          <Route path="/Plot/delete/:id" element={renderWithCredentials(ConfirmDeletePlot, "ADMIN")} />
          <Route path="/Gardener/delete/:id" element={renderWithCredentials(ConfirmDeleteGardener, "ADMIN")} />
          <Route path="/Community/:communityId/viewplot/:plotId/AddGardener" element={renderWithCredentials(AddGardener, "ADMIN")} />
          <Route path="/Community/:communityId/viewplot/:plotId/editgardener/:gardenerId" element={renderWithCredentials(GardenerForm, "ADMIN")} />
          <Route path="/Community/:communityId/viewplot/:plotId/AddPlantForm" element={renderWithCredentials(AddPlantForm, "USER", "ADMIN")} />
            {/* <Route path="edit" element={<EditCommunity />} /> */}

            {/* <Route path="deleteGardener/:gardenerId" element={<deleteGardener />} /> */}
            
            {/* <Route path="editPlot/:plotId" element={<EditPlot />} /> */}
            {/* <Route path="deletePlot/:deleteId" element={<DeletePlot />} /> */}
          <Route path="/Species" element={renderWithCredentials(Speciess, "USER", "ADMIN")} />
          <Route path="/Species/add" element={renderWithCredentials(SpeciesForm, "ADMIN")} />
          <Route path="/Species/delete/:id" element={renderWithCredentials(ConfirmDeleteSpecies, "ADMIN")} />
          <Route path="/Species/edit/:id" element={renderWithCredentials(SpeciesForm, "ADMIN")} />
          <Route path="/Plant/add" element={renderWithCredentials(AddPlantForm, "USER", "ADMIN")} />
          <Route path="/Plant/edit/:id" element={renderWithCredentials(AddPlantForm, "USER", "ADMIN")} />
          <Route path="/Plant/delete/:id" element={renderWithCredentials(ConfirmDeletePlant, "USER", "ADMIN")} />
          <Route path="/Plant" element={renderWithCredentials(Plants, "USER", "ADMIN")} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/unexpectederror" element={<UnexpectedError />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterNav></FooterNav>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
