import './Header.css';


export default function Header (){
  return (<>
    <div className="header">
    <div id="carouselIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
   <ol class="carousel-indicators">
    <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselIndicators" data-slide-to="1"></li>
    <li data-target="#carouselIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/assets/horizontal.png"} alt="First slide"></img>
   <div class="carousel-caption d-none d-md-block"><h5>Mandalorian</h5></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/assets/6.gif"}  alt="Second slide"></img>
      <div class="carousel-caption d-none d-md-block"><h5>Mandalorian</h5></div></div>
    <div class="carousel-item">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/assets/horizontal.png"} alt="Third slide"></img>
      <div class="carousel-caption d-none d-md-block"><h5>Mandalorian</h5></div></div>
    <div class="carousel-item">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/assets/8.gif"} alt="Fourth slide"></img>
      <div class="carousel-caption d-none d-md-block"><h5>Mandalorian</h5></div> </div>
  </div>
</div>
    </div>
  
    </>
  );
};