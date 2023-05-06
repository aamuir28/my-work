function NotFound() {
  return (
    <main id="main404">
       <h1 className="text- mt-4" style={{ borderRadius: '5px', backgroundColor: "#98BF64"}}>404</h1>
      <p>This is not the page you seek</p>
      <img src= {process.env.PUBLIC_URL + "/assets/grogu.png"} alt="grogu" class="img-fluid rounded mx-auto d-block"></img>
    </main>
  );
}

export default NotFound;