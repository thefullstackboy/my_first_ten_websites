const Footer = ()=> {
    return (
        <>
        <footer>
    <div className="section-container footer-container">
        <div className="container">
            <div className="row">
                    <div className="col-md-4">
                        <h4>About us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor</p>
                    </div>

                    <div className="col-md-4">
                        <h4>Do you like ? Share this !</h4>
                        <p>
                            <a href="https://facebook.com/" className="social-round-icon white-round-icon fa-icon" title="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                          <a href="https://twitter.com/" className="social-round-icon white-round-icon fa-icon" title="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                          <a href="https://www.linkedin.com/" className="social-round-icon white-round-icon fa-icon" title="">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </p>
                        <p><small>© Untitled | Website created with <a href="http://www.mashup-template.com/" className="link-like-text" title="Create website with free html template">Mashup Template</a>/<a href="http://www.unsplash.com/" className="link-like-text" title="Beautiful Free Images">Unsplash</a></small></p>    
                    </div>

                    <div className="col-md-4">
                        <h4>Subscribe to newsletter</h4>
                        
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control footer-input-text" />
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-primary btn-newsletter ">OK</button>
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer;