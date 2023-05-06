import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Search from "./Search";

// import { RiUserLine } from "react-icons/ri";

function FooterNav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
    <div><h3 class="bg-dark text-center text-light w-100">Useful Links</h3>
      <nav class="navbar navbar-expand navbar-dark " id="AltNav">
        <Link class="navbar-brand" href="/Home">
         <h2>🌱</h2> 
        </Link>
          <div class="row" className="row">
          <div class="column">
           <Link href="https://www.almanac.com/" target="_blank">
              Farmer's Almanac
           </Link>
          </div>
          <div class="column">
           <Link
              href="https://modernize.com/home-ideas/26894/how-to-lower-your-water-footprint-in-your-garden"
              target="_blank"
            >
              How to Lower Your Water Footprint in You Garden
           </Link>
          </div>
          </div>
          <div class="row" className="row">
          <div class="column">
           <Link
              href="http://naturemoms.com/blog/2011/02/24/getting-kids-excited-about-gardening/"
              target="_blank"
            >
              Getting Kids Excited About Gardening
           </Link>
          </div>
          <div class="column">
           <Link
              href="https://www.gardeningknowhow.com/edible/vegetables/vgen/layout-options-for-gardens.htm"
              target="_blank"
            >
              Tips On Layout Options For Your Garden
           </Link>
          </div></div>
          <div class="row" className="row">
          <div class="column">
           <Link
              href="https://morningchores.com/vegetable-garden-plans/"
              target="_blank"
            >
              Layout Ideas That Will Inspire You
           </Link>
          </div>
          <div class="column">
           <Link
              href="https://growagoodlife.com/vegetable-garden-map-garden-beds/"
              target="_blank"
            >
              Mapping the Garden Beds
           </Link>
          </div>
</div>

      </nav>
      <p className="position-middle bottom-5 end-5 bg-dark text-center text-light w-100">&copy; 2023 Community Garden App</p>
      </div>
      {" "}
    </>
  );
}

export default FooterNav;
