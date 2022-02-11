
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <>
 <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    
                    <span className="navbar-text" >
                            <a href="#" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/ICON_TWITTER.svg"/>
                            </a>
                            <a href="#" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/ICON_INSTA.svg"/>
                            </a>
                            <a href="#" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/ICON_INSTA.svg"/>
                            </a>
                            
                    </span>
                </div>
            </nav>
        </div>
	</>
  );
}

export default Home;
