import Footer from "./Footer";

const  Home = ()=> {
    return (
        <>
        <div className="white-text-container background-image-container bgimg">
    <div className="opacity"></div>
    <div className="container">
        <div className="row">
           
            <div className="col-md-6">
                <h1>Posuere lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit
                    amet consectetur adipiscing elit. </p>
                 <a href="./download.html" title="" className="btn btn-lg btn-primary">Download</a>
            </div>

        </div>
    </div>
</div>

<div className="section-container border-section-container">
    <div className="container">
            <div className="row">
                <div className="col-md-12 section-container-spacer">
                    <div className="text-center">
                        <h2>Vivamus laoreet</h2>
                        <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.<br/> Porta non
                            pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="fa-container">
                        <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h3>Consectetur</h3>
                    </div>
                    <div>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                            non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                            Turpis egestas pretium aenean pharetra magna ac.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="fa-container">
                        <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h3>Malesuada</h3>
                    </div>
                    <div>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                            non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                            Turpis egestas pretium aenean pharetra magna ac.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="fa-container">
                        <i className="fa fa-bell-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h3>Phasellus</h3>
                    </div>
                    <div>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                            non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                            Turpis egestas pretium aenean pharetra magna ac. 
                        </p>
                    </div>
                </div>

            </div>
    </div>
</div>

<div className="section-container">
    <div className="container">
            <div className="row">
                <div className="col-xs-12">


                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img className="img-responsive img5"  alt="First slide" />
                            </div>
                            <div className="item">
                                <img className="img-responsive img7"  alt="Second slide" />
                            </div>
                            <div className="item">
                                <img className="img-responsive img5"  alt="Third slide" />
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>


                </div>
            </div>
    </div>
</div>


<div className="section-container background-color-container white-text-container">
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <div className="text-center">
                    <h2>Vivamus laoreet</h2>
                    <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non
                        pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis
                        egestas pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi. </p>
                    <a href="./download.html" title="" className="btn btn-primary btn-lg">Download</a>
                </div>
            </div>
        </div>
     </div>
 </div>

 <div className="section-container">
    <div className="container">
        <div className="row">                   
            <div className="col-md-7">
                <img className="img-responsive img6"  alt="image6" />
            </div>

            <div className="col-md-5">
                <ul className="features">
                    <li>
                        <h3>Dui augue</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                    <li>
                        <h3>Malesuada</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                    <li>
                        <h3>Bibendum</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                </ul>
            </div>
        

              
            <div className="row">
                <div className="col-md-4">
                        <img className="img-responsive page-base-image" src="./assets/images/logo-01.png" alt="" />

                </div>
                <div className="col-md-4">
                        <img className="img-responsive page-base-image" src="./assets/images/logo-02.png" alt="" />
                </div>
                <div className="col-md-4">
                        <img className="img-responsive page-base-image" src="./assets/images/logo-03.png" alt="" />
                </div>
            </div>
            
        </div>
    </div>
</div>

<Footer/>
        </>
       
    )
}

export default Home;