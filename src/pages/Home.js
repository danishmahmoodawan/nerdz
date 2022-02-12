
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <>
 <div className="cotainer bg-nav fixed-top" style={{paddingLeft: "10%",paddingRight: "10%"}}>
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
                        <button className="btn btn-light button_join"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join discord </button>
                            
                        </li>
                    </ul>
                      </div>
            </nav>
        </div>
        <section className="sec_bg bg-image_sec">
        <div className="container text-center">
        <div className="row">
        <div className="col-12 seting_row">
        <button className="btn  button_nerd"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join The Nerdz </button>
      </div>
      </div>

        </div>
          
          </section>

          <section className="sec_two">
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6 col_set_">
        <h1>Who Are We?</h1>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed  <br />do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis<br /> nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea<br /> commodo consequat. Duis aute<br /> irure dolor in reprehenderit in<br /> voluptate velit esse cillum dolore<br /> eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat <br />non proident, sunt in <br />culpa qui officia deserunt mollit <br />anim id est laborum</p>
      </div>
      <div className="col-sm-12 col-md-6">
        <img src="assets/images/green_nrdz.png" alt="" />

      </div>
      </div>

        </div>
          
          </section>

          <section className="sec_three bubble">
        <div className="container">
        <div className="row">
        <div className="col-sm-12 margins_se">
<h1 className="set_head">WHY BE A NERD?</h1>
</div>
</div>
<div className="row nerd_row text-center">
<div className="col-sm-12 col-md-3">
<div className="bg_se">
<img src="assets/images/Rectangle99.png" alt="" /> </div>
<span className="span_font">EDUCATION</span>

</div>
<div className="col-sm-12 col-md-3">
<div className="bg_se">
<img src="assets/images/Rectangle98.png" alt="" /> </div>
<span className="span_font">GIVEAWAY</span>

</div>
<div className="col-sm-12 col-md-3">
<div className="bg_se">
<img src="assets/images/Rectangle97.png" alt="" /> </div>
<span className="span_font">SUPPORT</span>

</div>
<div className="col-sm-12 col-md-3">
<div className="bg_se">
<img src="assets/images/Rectangle96.png" alt="" /> </div>
<span className="span_font">WAY TO
THE METAVERSE</span>

</div>

        </div> 
        </div>

</section>    
<section className="roadmapsecdes">
<div className="container">
  <div className="row pb-5 ">
 
  <div className="col-12">  
  <h1 className="pb-3 pt-2 mb-5 headonese roadmapHead">ROAD MAP</h1>  <img src="assets/images/image-18.png" alt="" />
  </div>
  </div>
  <div className=" row mt-3">
  <div className="col-12 text-center">
 <button className="btn  button_nerd btn_nerds"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join The Nerdz </button>
 </div>
 </div> 
  </div>
</section>
<section className="roadmapsec">
<div className="roadmap_main">
  <div className="container pb-5">
  <div className="row mainmap">
  <div className="col-lg-3 col-md-3 col-sm-12 none_clas">    <img src="assets/images/map1.png" alt="" />
  <img class="sec_end" src="assets/images/map3.png" alt="" />
</div>
  <div className="col-lg-6 col-md-12 col-sm-12">
    <h1 className="pb-3 pt-2 mb-5 headonese roadmapHead">ROAD MAP</h1>
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold"><i class="fas fa-circle"></i></div>
      </div>
      <div className="col-8">
        <h5>December 5th</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right"></div>
      </div>
      <div className="col-8">
        <hr/>
      </div>
      <div className="col-2">
        <div className="corner left-bottom"></div>
      </div>
    </div>
    <div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
      
        <h5>December 5th</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold"><i class="fas fa-circle ywll"></i></div>
      </div>
    </div>
    <div className="row timeline">
      <div className="col-2">
        <div className="corner right-bottom"></div>
      </div>
      <div className="col-8">
        <hr/>
      </div>
      <div className="col-2">
        <div className="corner top-left"></div>
      </div>
    </div>
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold"><i class="fas fa-circle ywll"></i></div>
      </div>
      <div className="col-6">
        <h5>December 5th</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
    <div className="row timeline"><div className="col-2"><div className="corner top-right"></div></div><div className="col-8"><hr />
    </div><div className="col-2"><div className="corner left-bottom"></div></div></div>
    <div className="row align-items-center justify-content-end how-it-works d-flex"><div className="col-6 text-right"><h5>December 5th</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p></div><div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
    <div className="circle font-weight-bold"><i className="fas fa-circle ywll"></i></div></div></div>
    <div className="row timeline"><div className="col-2"><div className="corner right-bottom"></div></div><div className="col-8"><hr />
    </div><div className="col-2"><div className="corner top-left"></div></div></div>
    <div className="row align-items-center how-it-works d-flex"><div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
    <div className="circle font-weight-bold"><i className="fas fa-circle ywll"></i></div></div><div className="col-6"><h5>December 5th</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p></div></div>
    <div className="btn_row row mt-3 mb-5">
 <button className="btn  button_nerd btn_nerds"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join The Nerdz </button>
 </div> 
  </div>
  
  <div className="col-lg-3 col-md-3 col-sm-12 none_clas my-auto">    <img src="assets/images/map2.png" alt="" />
</div>

</div>
</div>
</div>
  </section>

          <section className="sec_five">
        <div className="container cols_set_">
        <div className="row">
        <div className="col-sm-12 margins_se">
        <h1 className="headonese">TEAM</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-4 mt-2 mb-2"> 
        <div className="mian_taem">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
         </div>
        <div className="col-sm-12 col-md-4 mt-2 mb-2">
        <div className="mian_taem team_bg_s">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
</div>
        <div className="col-sm-12 col-md-4 mt-2 mb-2"> <div className="mian_taem team_bg_r">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
</div>

        </div>
        <div className="row pt-3 pb-3 row_team_set">
        <div className="col-sm-12 col-md-4 mt-2 mb-2"> 
        <div className="mian_taem team_bg_b">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
         </div>
        <div className="col-sm-12 col-md-4 mt-2 mb-2">
        <div className="mian_taem team_bg_cv">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
</div>
        <div className="col-sm-12 col-md-4 mt-2 mb-2"> <div className="mian_taem team_bg_tr">
        <span class="post">Position</span>
        <img src="assets/images/white_img.png" alt="" /> 
        <h1 className="team_name"> John Doe </h1>
        <div className="set_oicin"> <img className="d-inline set_imgg" src="assets/images/icon/ICON_TWITTER.svg"/><span className="d-inline">@johndoe</span></div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</span>
        </div>
</div>

        </div> 
        </div>
</section>    

          <section className="sec_faq">
        <div className="container-fluid p-0">
        <div className="row">
        <div className="col-12 margins_se">
        <h1 class="headonese faq">FAQ</h1>
        </div>
        </div>
        <div className="container-fluid bg_rea p-0">
  <div class="row mt-3 mb-3 back_bl">
         <div class="col-md-12 col-sm-12">
            <div id="accordion">
               <div class="card">
                  <div class="card-header" id="headingOne">
                     <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>  </button>
                     </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum	
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingTwo">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>  </button>
                     </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThree">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>	  </button>
                     </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i></button>
                     </h5>
                  </div>
                  <div id="collapseThre" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThreew">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>	</button>
                     </h5>
                  </div>
                  <div id="collapseThreew" class="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
         <div class="row row text-center">
  <div className="col-12 setings_row pb-5">
        <button className="btn  button_nerds"  href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>Join discord </button>
      </div>
  </div>
        </div>
     </div>
        </section>
<section className="footer">
  <div class="container ">
  <div class="row seting_row">
  <div className="col-12  text-center">
  <img className="seicon" src="assets/images/footer-logo.png"/>

      </div>
  </div>
  </div>
  </section>
	</>
  );
}

export default Home;
