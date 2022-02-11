
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
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item set_pading">
                        <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/ICON_TWITTER.svg"/>
                            </a>
                        </li>
                        <li className="nav-item set_pading">
                        <a href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/ICON_INSTA.svg"/>
                            </a>
                        </li>
                        <li className="nav-item set_pading">
                        <button class="btn btn-light button_join"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join discord </button>
                            
                        </li>
                    </ul>
                      </div>
            </nav>
        </div>
        <section>
          <h1>Join D</h1>
          </section>
	</>
  );
}

export default Home;
