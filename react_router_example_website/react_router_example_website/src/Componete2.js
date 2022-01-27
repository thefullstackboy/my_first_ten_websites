import Footer from "./Footer";
const Componete2 = ()=> {
    return (
        <>

<div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6">

        <div className="template-example">
          <h2 className="template-title-example">Text</h2>
          <p>This is bold and this is semi bold and <b>this is extra bold</b>. This is italic and this is extra light and this is light
          and this is regular. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. <a href="">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          
          </p>
        </div>

        <div className="template-example">
          <h2 className="template-title-example">Headings</h2>
          
          <table className="table table-bordered">
            <tr><td><h1>H1: Heading 1</h1></td></tr>
            <tr><td><h2>H2: Heading 2</h2></td></tr>
            <tr><td><h3>H3: Heading 3</h3></td></tr>
            <tr><td><h4>H4: Heading 4</h4></td></tr>
          </table>
          
        </div>

        
        <div className="template-example">
          <h2 className="template-title-example">List</h2>
          <div className="row">
            <div className="col-md-6">
              <h3 className="template-title-example">Ordered</h3>
              <ul>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="template-title-example">Number</h3>
              <ol>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ol>
            </div>
          </div>
        </div>
        

        
      </div>

      <div className="col-xs-12 col-md-6">
        <div className="template-example">
          
          <div className="row">
            
            <div className="col-md-6">
                <h2 className="template-title-example">Icons</h2>
                <p>
                    <span className="fa-icon">
                      <i className="fa fa-facebook"></i>
                    </span>
                  
                    <span className="fa-icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                  
                    <span className="fa-icon">
                      <i className="fa fa-linkedin"></i>
                    </span>
                 
                    <span className="fa-icon">
                      <i className="fa fa-instagram"></i>
                    </span>
                  
                </p>
            </div>

          </div>


          


        </div>

        <div className="template-example">
          <h2 className="template-title-example">Buttons</h2>
          <div className="row">
            <div className="col-md-6">
              <h3 className="template-title-example">Primary</h3>
              <div className="row">
                  <div className="col-md-6">
                  <p><a href="" className="btn btn-primary btn-lg">Primary Large</a></p>
                  <p><a href="" className="btn btn-primary">Primary </a></p>
                  <p><a href="" className="btn btn-primary btn-sm">Primary Small</a></p>
                </div>
              </div>

              <h2 className="template-title-example">Default</h2>
              <div className="row">
                  <div className="col-md-6">
                  <p><a href="" className="btn btn-default btn-lg">Default Large</a></p>
                  <p><a href="" className="btn btn-default">Default </a></p>
                  <p><a href="" className="btn btn-default btn-sm">Default Small</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="template-title-example">Secondary</h2>
              <div className="row">
                  <div className="col-md-6">
                  <p><a href="" className="btn btn-info btn-lg">Secondary Large</a></p>
                  <p><a href="" className="btn btn-info">Secondary </a></p>
                  <p><a href="" className="btn btn-info btn-sm">Secondary Small</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="template-example">
          <h2 className="template-title-example">Inputs</h2>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>

            <div className="form-group">
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-inline">
                <input 
                type="checkbox" id="inlineCheckbox1" value="option1" /> Email me a copy
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2" /> I am a human
              </label>
            </div>

            <div className="form-group">
              <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
            </div>
            
            <div className="alert alert-success" role="alert">Your message was successfully sent</div>
            <div className="alert alert-danger" role="alert">Your message has not been sent, restart</div>
        </div>




      </div>
    </div>
</div>
<Footer/>        
        </>
    )
}

export default Componete2;