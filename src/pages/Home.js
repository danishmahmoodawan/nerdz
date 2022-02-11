
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
        <section class="sec_bg bg-image_sec">
        <div class="container text-center">
        <div class="row">
        <div class="col-12 seting_row">
        <button class="btn  button_nerd"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join The Nerdz </button>
      </div>
      </div>

        </div>
          
          </section>

          <section class="sec_two">
        <div class="container">
        <div class="row">
        <div class="col-6 col_set_">
        <h1>Who Are We?</h1>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed  <br />do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis<br /> nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea<br /> commodo consequat. Duis aute<br /> irure dolor in reprehenderit in<br /> voluptate velit esse cillum dolore<br /> eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat <br />non proident, sunt in <br />culpa qui officia deserunt mollit <br />anim id est laborum</p>
      </div>
      <div class="col-6 ">
        <img src="assets/images/green_nrdz.png" alt="" />

      </div>
      </div>

        </div>
          
          </section>
          
	</>
  );
}

export default Home;
