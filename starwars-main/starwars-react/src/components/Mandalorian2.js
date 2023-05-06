import { Link } from "react-router-dom";
import HumanContent from "./HumanContent";

function Mandalorian2() {
  return (
    <div id="mandalorian2">
      <div className="row" >
        <div className="col-6" style={{ display: "flex" }}>
          <div>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#7393B3" }}>About The Mandalorian</h1>
            <ul style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", fontFamily: "Spectral, serif" }}>
              <li>The Mandalorian's birth name is Din Djarin.</li>
              <li>As a child, his parents hid him and were killed during an attack by battle droids during the Clone Wars.</li>
              <li>Djarin is rescued by a tribe of Mandalorian warriors, and was raised in the Mandalorian tradition.</li>
              <li>He was hired by Imperial forces to retrieve Grogu, but instead goes on the run to protect him from those who want to use his abilities for their own gain.</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={process.env.PUBLIC_URL + "assets/m15.jpeg"} alt="mandalorian fan page header" style={{ borderRadius: '5px', maxWidth: '100%' }} />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6" style={{ display: "flex" }}>
          <div className="">
            <img src={process.env.PUBLIC_URL + "assets/m2.webp"} alt="mandalorian fan page header" style={{ borderRadius: '5px', maxWidth: '100%' }} />
          </div>
        </div>
        <div className="col-6">
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#7393B3" }}>Fun Facts</h1>
            <ul style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", fontFamily: "Spectral, serif" }}>
              <li>The Mandalorian is played by the actor Pedro Pascal</li>
              <li>The Mandalorian never removes his helmet in front of others, which his tribe would consider a betrayal worthy of expulsion.</li>
              <li>The Mandalorian's suit was heavily influenced by the Boba Fett suit featured in The Empire Strikes Back and Return of the Jedi.</li>
              <li>His armor is made of Beskar Steel which has a high tolerance to extreme forms of damage such as blaster shots and lightsaber strikes.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div>
            <h1 className="text-center" style={{ borderRadius: '5px', backgroundColor: "#7393B3" }}>Species Info</h1>
            <div className="d-flex justify-content-center align-items-center" style={{ fontFamily: "Spectral, serif" }}>
              <HumanContent />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img src={process.env.PUBLIC_URL + "/assets/m.webp"} alt="m" style={{ borderRadius: '5px', maxWidth: '100%' }} />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <img src={process.env.PUBLIC_URL + "assets/m3.gif"} alt="mandalorian fan page header" style={{ width: '30%', display: 'block', margin: '0 auto' }} />
      </div>
      <div className="row text-center mt-4">
        <div>
          <h2 style={{ color: '#7393B3', border: '3px solid #7393B3', borderRadius: '5px' }}>8 Reasons Why We Love The Mandalorian</h2>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m4.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m5.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m6.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m7.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m8.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m9.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m10.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
            <div className="col-sm-3">
              <img src={process.env.PUBLIC_URL + "/assets/m11.gif"} alt="The Mandalorian" style={{ width: "100%", height: "85%" }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "assets/m13.png"} alt="mandalorian fan page header" style={{ display: 'block', margin: '0 auto' }} />
      </div>
      <div className="row">
        <div className="text-center">
          <h2 style={{ color: '#7393B3', border: '3px solid #7393B3', borderRadius: '5px' }}>Share the Reasons Why You Love The Mandalorian, Too!</h2>
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

export default Mandalorian2;
