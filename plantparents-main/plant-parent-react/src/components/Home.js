import Media from "./Media";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="Home">
      <section>
        <h1 class="sectionHeader" className="text- mt-2 sectionHeader">
          Welcome to Savy Planting
        </h1>

        <img
          class="rounded mx-auto"
          src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="fantastic and relevant hero"
        ></img>
        <h5 class="subSectionHeader">Are you plant savvy?</h5>
        <p>
          Whether you have a small forest growing in your studio apartment or
          struggle to keep cacti alive--- Savvy Planting has a solution for you.
          We're here to make your community garden manageable. Our Community
          Garden Management System (CGMS) is easy to use, flexible, and
          customizable.
        </p>

        <h6 class="subSectionHeader">
          Savy Planting will level up your green thumb
        </h6>
        <p>
          Whether you're a seasoned gardener or just starting out, our platform
          can help you get the most out of your gardening experience. Sign up
          today and start growing!
        </p>

        <Link
          to="/Register"
          className="text-decoration-none btn btn-success w-25 p-3 m-auto"
        >
          SIGN UP NOW
        </Link>
      </section>
      <section class="additionalInfo">
        <Media></Media>
      </section>
    </div>
  );
}

export default Home;
