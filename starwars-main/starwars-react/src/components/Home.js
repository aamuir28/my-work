function Home() {
  
  const maxContentWidth = "1146px"; 

  return (
    <div style={{ margin: "0 auto", maxWidth: maxContentWidth }}>
      {/* <img src={process.env.PUBLIC_URL + "/assets/header1.png"} alt="mandalorian fan page header" style={{ borderRadius: '8px', width: '100%', height: 'auto', alignItems: 'center' }} /> */}
    {/* <div id="home">
      <img src={process.env.PUBLIC_URL + "/assets/fan-page.png"} alt="mandalorian fan page header" style={{ borderRadius: '40px', width: '65vw', height: 'auto', margin:'2vw', alignItems: 'center' }} /> */}

      <div className="welcome-message text-center mt-4 mb-4">
      <img src={process.env.PUBLIC_URL + "/assets/outerrim.png"} alt="mandalorian fan page header" style={{ borderRadius: '8px', width: '100%', height: 'auto', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }} />
        <h1>A Fan Page for The Mandalorian and the Dangerous Adventures in a Galaxy Far, Far Away...</h1>
      </div>
      <img src={process.env.PUBLIC_URL + "assets/65910ad72048f3baebd4d1adc90d1b8f__1_-removebg-preview.png"} alt="mandalorian fan page header" style={{ borderRadius: '5px', display: 'block', margin: 'auto' }} />
      <div className="mt-4 mb-4"><h3>POPULAR ARTICLES</h3></div>
      <div className="row mb-4">
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://www.starwars.com/news/who-are-the-mandalorians" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://lumiere-a.akamaihd.net/v1/images/5dcd621f0ded610001358b64-image_02736349.jpeg?region=0,0,1536,864&width=960" className="card-img-top" alt="thumbnail of article" />
              <div className="card-body">
                <h5 className="card-title">Who Are the Mandalorians?</h5>
                <span className="text-muted">November 14, 2019</span>
                <p className="card-text">Continue Reading →</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://www.goldderby.com/article/2023/the-mandalorian-season-3-villain/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://www.goldderby.com/wp-content/uploads/2020/10/baby-yoda-The-Mandalorian-Season-2.jpg?w=620&h=360&crop=1" className="card-img-top" alt="thumbnail of article" />
              <div className="card-body">
                <h5 className="card-title">‘The Mandalorian’: Who is the true villain of Season 3? Top 3 suspects</h5>
                <span className="text-muted">March 23, 2023</span>
                <p className="card-text">Continue Reading →</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://www.gamespot.com/articles/everything-to-know-about-the-mandalorians-shocking-new-jedi-cameo/1100-6512584/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://www.gamespot.com/a/uploads/scale_super/1757/17577455/4115449-ahmedbestjedicameothemandalorian.jpg" className="card-img-top" alt="thumbnail of article" />
              <div className="card-body">
                <h5 className="card-title">Everything To Know About The Mandalorian's Shocking New Jedi Cameo</h5>
                <span className="text-muted">March 22, 2023</span>
                <p className="card-text">Continue Reading →</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + "assets/65910ad72048f3baebd4d1adc90d1b8f__1_-removebg-preview.png"} alt="mandalorian fan page header" style={{ borderRadius: '5px', display: 'block', margin: 'auto' }} />
      <div className="mt-4 mb-4"><h3>QUIZZES</h3></div>
      <div className="row mb-4">
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://www.starwars.com/news/quiz-character-the-mandalorian" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://lumiere-a.akamaihd.net/v1/images/5f9c2dbe1aae7500016f3ecf-image_3c2ef73a.jpeg?region=0,0,1536,864&width=960" className="card-img-top" alt="thumbnail of article" />
              <div className="card-body">
                <h5 className="card-title">Which Character from The Mandalorian Are You?</h5>
                <p className="card-text">Click Here to Find Out!</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://disneyrewards.com/blog/fun-tips/mandalorian-quiz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://disneyrewards.com/app/uploads/2022/03/Q3_IG_11.webp" className="card-img-top" alt="thumbnail of item" />
              <div className="card-body">
                <h5 className="card-title">How Well Do You Know The Mandalorian?</h5>
                <p className="card-text">Test Your Knowledge!</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col shadow me-2" style={{ padding: '0' }}>
          <a href="https://www.buzzfeed.com/mattwasshie/the-mandalorian-is-here-take-this-personality-qui-9h4aj0yz7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card h-100">
              <img src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/16eSs5PA.png?output-format=auto&output-quality=auto" className="card-img-top" alt="thumbnail of article" />
              <div className="card-body">
                <h5 className="card-title">Which "Mandalorian" Character Matches Your Personality?</h5>
                <p className="card-text">Click Here to Find Out!</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div>
      </div>
      <footer className="site-footer">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/horizontal.png"})`, backgroundSize: 'cover', backgroundPosition: 'bottom', minHeight: '60vh', borderRadius: '5px' }}>
          <p className="text-center" style={{ color: 'goldenrod', fontFamily: 'Georgia', fontSize: '24px', margin: '20px' }}>Thanks for visiting our page!<br></br> Whether you're a lifelong fan or a newcomer to the series, we invite you to explore everything our page has to offer. Thank you for stopping by, and we hope you'll stick around and join us on this journey through the galaxy far, far away.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="#top">
            <img src={process.env.PUBLIC_URL + "/assets/up.jpg"} alt="back to top" />
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="#top">
            <img src={process.env.PUBLIC_URL + "/assets/backtotop.png"} alt="back to top" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home;
