function Contact() {

  return (
    <>
      <h2 className="text-center">Join Our Mailing List</h2>
      <h3 className="text-center">To Receive Exclusive Updates and Offers</h3>
      <form>
        <div className="form-group row mb-2">
          <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label" style={{ fontFamily: "Spectral" }}><b>Email Address</b></label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" style={{ fontFamily: 'Spectral' }}></input>
            <small id="emailHelp" className="form-text text-muted" style={{ fontFamily: 'Spectral' }}>We'll never share your email with anyone else.</small>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="name" className="col-sm-2 col-form-label" style={{ fontFamily: "Spectral" }}><b>Name</b></label>
          <div className="col-sm-10">
            <input type="name" className="form-control" id="name" placeholder="Name" style={{ fontFamily: 'Spectral' }}></input>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="message" className="col-sm-2 col-form-label" style={{ fontFamily: "Spectral" }}><b>Message</b></label>
          <div className="col-sm-10">
            <textarea className="form-control" id="message" rows="5" placeholder="Message" style={{ fontFamily: 'Spectral' }}></textarea>
          </div>
        </div>
        <div className="form-group row mb-2">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1" style={{ marginLeft: '10px', fontFamily: "Spectral" }}><b>Sign me up!</b></label>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <hr></hr>
      <div>
        <h2 className="text-center" style={{ marginTop: '30px' }}>Contact Us</h2>
        <h4 className="text-center mt-4">Via Email</h4>
        <h6 className="text-center mt-3">superfakemandalorianfanpage@dontemailus.com</h6>
        <hr></hr>
        <h2 className="text-center" style={{ marginTop: '30px' }}>Follow Us On Social Media</h2>
        <div className="d-flex justify-content-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
            <img src={process.env.PUBLIC_URL + "/assets/ig.jpeg"} alt="Instagram" style={{ width: '50px', height: '50px', margin: '10px', borderRadius: '5px' }} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" >
            <img src={process.env.PUBLIC_URL + "/assets/twitter.jpeg"} alt="Twitter" style={{ width: '50px', height: '50px', margin: '10px', borderRadius: '5px' }} />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" >
            <img src={process.env.PUBLIC_URL + "/assets/tiktok.jpeg"} alt="Tiktok" style={{ width: '50px', height: '50px', margin: '10px', borderRadius: '5px' }} />
          </a>
        </div>
      </div>
      <footer className="contact-footer">
      </footer>
    </>)
}
export default Contact;
