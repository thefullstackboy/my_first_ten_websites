import Footer from "./Footer";

const Contact = ()=> {
    return (
        <> 
        <div className="section-container no-padding">
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
            <iframe  className="mapwidth"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652151.2747342857!2d73.87389695!3d26.630739750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1637920609692!5m2!1sen!2sin" ></iframe>
            </div>
            <div className="col-xs-12">

                <div className="row">
                    <div className="col-md-6">
                        <form action="" className="reveal-content contact-form">
                            <div className="form-group">
                                <input type="name" className="form-control" id="name" placeholder="Full name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Send</button>
                        </form>
                    </div>


                    <div className="col-md-5 col-md-offset-1">
                            
                        <h3>Head Office</h3>
                        
                        <div>
                            <p>42 rue Rouelle <br/>75015 Paris FRANCE</p>
                        </div>
                        <div>
                            <p>contact@mybusiness.com<br/>+331 45 31 64 32</p>
                        </div>
                    
                        <div>
                            <h3>Employment</h3>
                        </div>
                        <div>
                            <p>To apply for a job with our team, please feel free to send us your Linkedin profile link
                                ou CV to : employment@mybusiness.com</p>
                        </div>
                       
                    </div>
                </div>


            </div>

        </div>

    </div>
</div>
<Footer/>
        </>
    )
}

export default Contact;