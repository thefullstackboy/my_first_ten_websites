import Footer from "./Footer";
const Download = ()=> {
    return (
        <>
        <div className="section-container">
    <div className="container">
    
        <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
                <div className="section-container-spacer">
                    <div className="text-center">
                        <h1>Download</h1>
                    </div>
                    <p>Adipiscing vitae proin sagittis nisl rhoncus mattis. Bibendum enim facilisis gravida neque convallis
                        a cras semper auctor. Sit amet risus nullam eget felis eget. Metus dictum at tempor commodo ullamcorper
                        a lacus vestibulum. Sit amet facilisis magna etiam tempor orci eu. Eleifend mi in nulla posuere.
                        Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Arcu risus quis varius quam
                        quisque id diam. Sagittis vitae et leo duis ut diam quam. Risus nullam eget felis eget nunc lobortis
                        mattis aliquam.
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 ">
                <div className="download-card ">
                    <p>Bibendum enim facilisis gravida <br/>neque convallis a cras semper </p>
                    <br/>
                    <a href="https://itunes.apple.com/fr/genre/mac/" title=""> <img  className="img-responsive apple" alt="apple" /></a>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="download-card">
                    <p>Bibendum enim facilisis gravida <br/>neque convallis a cras semper </p>
                    <br/>
                    <a href="https://play.google.com/store/apps" title=""> <img  className="img-responsive google" alt="google" /></a>
                </div>
                    
            </div>
        </div>
    </div>
</div>           


<div className="section-container">
    <div className="container">
        <div className="row">
            <div className="col-xs-12">

                <div className="text-center">
                    <blockquote>
                        <p>“Eu augue ut lectus arcu bibendum at varius”
                            <small className="">Francois Mathieu</small>
                        </p>
                    </blockquote>
                </div>

                

</div>
        </div>
    </div>
</div>
        <Footer/>
        </>

    )
}

export default Download;