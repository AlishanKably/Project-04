function Contact() {

  return (
    <div className="container pad contactform">
      <section className="mb-4 ">
      
        <div className="row center">
        <h2 className="heading center">Contact us</h2>
              
          <div>
            
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0 field form-group">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0 field form-group">
                    <input type="text" name="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0 field form-group">
                    <input type="text" name="subject" className="form-control" placeholder="Subject"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form field form-group">
                    <textarea className="form-control md-textarea" placeholder="Your Message"></textarea>
                    <div className="form-group">
                      <button className="form-control btn btn-warning">Submit</button></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact