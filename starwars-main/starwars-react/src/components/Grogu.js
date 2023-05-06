import ShowContent from "./ShowContent";
import { Link } from "react-router-dom";

function Grogu() {
  return (
    <div id="grogu">
      <div className="row" >
        <div className="col-6" style={{ display: "flex" }} >
          <div>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#98BF64" }}>About Grogu</h1>
            <ul style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", fontFamily: "Spectral, serif" }}>
              <li>Grogu is a character from the Disney+ series The Mandalorian.</li>
              <li>He is often referred to as "Baby Yoda" by fans.</li>
              <li>Grogu has brown eyes, white hair, and green skin.</li>
              <li>Grogu is a member of the same species as the legendary Grand Master Yoda.</li>
              <li>He possesses strong Force abilities, which he often uses to help the show's protagonist, the Mandalorian.</li>
              <li>Born in approximately 41 BBY, during the era of the Galactic Republic, Grogu was raised in the Jedi Temple on Coruscant.</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={process.env.PUBLIC_URL + "assets/grogu-baby-yoda.gif"} alt="mandalorian fan page header" style={{ borderRadius: '5px' }} />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6" style={{ display: "flex" }}>
          <div className="border">
            <div>
              <img src={process.env.PUBLIC_URL + "assets/Grogu-profile.webp"} alt="mandalorian fan page header" style={{ borderRadius: '5px', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#98BF64" }}>Fun Facts</h1>
            <ul style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", fontFamily: "Spectral, serif" }}>
              <li>Despite being nicknamed Baby Yoda, he is actually not the baby version of Yoda.</li>
              <li>He is 50 years old.</li>
              <li>He is the third of his species that exists in the Star Wars canon.</li>
              <li>Grogu is 0.34 meters tall.</li>
              <li>His favorite snack is blue space macarons, which he is often seen eating in the show.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#98BF64" }}>Species Info</h1>
            <div className="d-flex justify-content-center align-items-center" style={{ fontFamily: "Spectral, serif" }}>
              <ShowContent />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={process.env.PUBLIC_URL + "assets/baby-yoda-grogu-mandalorian.webp"} alt="baby yoda" style={{ borderRadius: '5px', maxWidth: '100%' }} />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <img src={process.env.PUBLIC_URL + "assets/baby-yoda-star-wars.gif"} alt="baby yoda gif" style={{ width: '30%', display: 'block', margin: '0 auto' }} />
      </div>
      <div className="row text-center mt-4">
        <div>
          <h2 style={{ color: '#98BF64', border: '3px solid #98BF64', borderRadius: '5px' }}>8 Reasons Why We Love Grogu</h2>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/1.gif"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/2.gif"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/3.webp"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/4.webp"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/5.webp"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/6.gif"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/7.gif"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/8.gif"} alt="baby yoda gif" style={{ width: "100%", height: "85%" }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "assets/s-l1600-removebg-preview (1).png"} alt="baby yoda" style={{ width: '30%', display: 'block', margin: '0 auto' }} />
      </div>
      <div className="row">
        <div className="text-center">
          <h2 style={{ color: '#98BF64', border: '3px solid #98BF64', borderRadius: '5px' }}>Share the Reasons Why You Love Grogu, Too!</h2>
        </div>
        <Link to="/comments/add" className="btn btn-primary" style={{ marginBottom: '30px' }}>Leave a Comment</Link>
      </div>
      <footer className="site-footer">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="#top">
            <img src={process.env.PUBLIC_URL + "/assets/backtotop.png"} alt="back to top" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Grogu;
