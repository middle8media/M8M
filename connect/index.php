<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=yes;" />

	<title>Middle8Media - a Digital Media Studio - Connect</title>
	<meta name="keywords" content="Greensboro, North Carolina, Web Design, Web Development, Film, Video, Filmmaking, Videography, Triad, Winston-Salem, High Point, Triangle, Raleigh, Durham, Chapel Hill">
	<meta name="description" content="We design & develop beautifully responsive websites, as well as produce unique & engaging films, for the artist & entrepreneur alike.">

	<!-- Included CSS Files -->
	<link rel="stylesheet" href="../stylesheets/app.css">

	<!--[if lt IE 9]>
		<link rel="stylesheet" href="css/ie.css">
	<![endif]-->
  <script type="text/javascript" src="http://use.typekit.com/kbo4elj.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<script src="../javascripts/foundation/modernizr.foundation.js"></script>

	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

  <body id="page" class="off-canvas hide-extras">
	<div class="container">

		<header id="header" class="row">
      <?php include '../nav.php'; ?>
		</header>

		<div class="row">
      <section role="main">
        <h2>Connect with Us</h2>
          <dl class="tabs pill">
            <dd class="active"><a href="#connect"><i class="icon-comments icon-large"></i> </a></dd>
            <dd><a href="#contact"><i class="icon-envelope-alt icon-large"></i> </a></dd>
          </dl>

          <div class="row">
            <div class="twelve columns">
              <ul class="tabs-content">

                <li class="active" id="connectTab">
                  <div class="row">
                    <div class="eight columns">
                      <blockquote>"At Middle8Media the relationships we form with our clients are of the upmost importance. That's why we give you and your project the personal attention needed to create the best solution for your particular need. We take pride in producing high quality, standardized websites and unique, handcrafted films and consider it a privelage to partner with you and share your vision with the world. This is our promise to you. So, if this sounds like the kind of relationship you desire, please connect with us, we would love to discuss your next project."
                      </blockquote>

                      <blockquote class="quote"><cite>Seth Hall, Founder</cite></blockquote>

                    </div>

                      <div class="four columns">

                        <!-- Add Chirp -->

                        <script src="../javascripts/foundation/chirp.js"></script>
                        <div class="panel">
                          <h5>Latest Tweet</h5>
                          <script>Chirp({
                            user: 'middle8media', //Twitter username
                            max: 1, //Maximum number of tweets to show
                            count: 1, //Total tweets to retrieve
                            retweets: true, //Show/Don't show retweets
                            replies: false,  //Show/Don't show replies
                            cacheExpire: 1000 * 60 * 2 //Number of milliseconds to cache tweets
                          })</script>
                        </div>

                        <div class="social-networks panel">
                          <h5>Social Networks</h5>
                          <ul>
                            <li><span class="glyph social facebook"><a href="http://www.facebook.com/middle8media" target="_blank" title="M8M on Instagram">d </a></span></li>
                            <li><span class="glyph social twitter"><a href="http://twitter.com/middle8media" target="_blank" title="M8M on Instagram">y </a></span></li>
                            <li><span class="glyph social instagram"><a href="http://followgram.me/middle8media" target="_blank" title="M8M on Instagram">t </a></span></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                </li>

                <li id="contactTab">
                      <div class="row">
                        <div class="twelve columns">
                            <?php include '../project-status.php'; ?>

                            <p>If you are interested in hiring us for your next project, please fill out the form below and we will respond shortly. If you just want to say hello you can send us an <a href="mailto:info@middle8media.com?subject=Just Saying Hello" "email">email</a>.</p>

                            <form class="jotform-form" action="http://submit.jotform.com/submit.php" method="post" name="form_12854524282" id="12854524282" accept-charset="utf-8">
                            <input type="hidden" name="formID" value="12854524282">

                              <fieldset>
                              <div id="formLeft">
                              <ul class="form-section">

                                  <div class="six columns name" style="padding-left: 0px;">
                                    <li class="form-line" id="id_1">
                                      <label class="form-label-left" id="label_1" for="input_1">
                                        Name
                                      </label>
                                      <div id="cid_1" class="form-input">
                                        <input type="text" class="form-textbox validate[required]" id="input_1" name="q1_name1" size="30">
                                      </div>
                                    </li>
                                  </div>

                                  <div class="six columns phone " style="padding: 0px;">
                                    <li class="form-line" id="id_4">
                                      <label class="form-label-left" id="label_4" for="input_4">
                                        Phone
                                      </label>
                                      <div id="cid_4" class="form-input">
                                        <input type="text" class="form-textbox validate[required]" id="input_4" name="q4_phone" size="30" maxlength="20">
                                      </div>
                                    </li>
                                  </div>



                                  <div class="six columns email" style="padding-left: 0px;">
                                    <li class="form-line" id="id_8">
                                      <label class="form-label-left" id="label_8" for="input_8">
                                        E-mail
                                      </label>
                                      <div id="cid_8" class="form-input">
                                        <input type="email" class="form-textbox validate[required, Email]" id="input_8" name="q8_email8" size="30">
                                      </div>
                                    </li>
                                  </div>

                                  <div class="six columns website" style="padding: 0px;">
                                    <li class="form-line" id="id_6">
                                      <label class="form-label-left" id="label_6" for="input_6">
                                        Current Website
                                      </label>
                                      <div id="cid_6" class="form-input">
                                        <input type="text" class="form-textbox validate[required]" id="input_6" name="q6_currentWebsite" size="30">
                                      </div>
                                    </li>
                                  </div>


                                </ul>
                              </div>

                              <div id="formRight">

                                  <div class="twelve columns details" style="padding: 0px;">
                                    <li class="form-line" id="id_5">
                                      <label class="form-label-left" id="label_5" for="input_5">
                                        Project Details
                                      </label>
                                      <div id="cid_5" class="form-input">
                                        <textarea id="input_5" class="form-textarea validate[required]" name="q5_projectDetails" cols="40" rows="6"></textarea>
                                      </div>
                                    <div class="form-description" style="display: none; "><div class="form-description-arrow"></div><div class="form-description-arrow-small"></div><div class="form-description-content"></div></div>
                                    </li>
                                  </div>



                                  <div class="twelve columns budget" style="padding: 0px 0px 20px 0px;">
                                    <li class="form-line" id="id_10">
                                      <label class="form-label-left" id="label_10" for="input_10 customDropdown">
                                        Budget
                                      </label>
                                      <div id="cid_10" class=""><span class="form-sub-label-container"><select class="form-dropdown validate[required]" style="width:178px" id="input_10" name="q10_budget">
                                            <option></option>
                                            <option selected="selected" value="Please Select One"> Please Select One </option>
                                            <option value="$2,000 - $3,500"> $2,500 - $3,500 </option>
                                            <option value="$3,500 - $5,000"> $3,500 - $5,000 </option>
                                            <option value="$3,500 - $5,000"> $5,000 - $10,000 </option>
                                            <option value="$3,500 - $5,000"> $10,000 or more </option>
                                            <option value="$3,500 - $5,000"> to be determined </option>
                                          </select>

                                    </li>
                                  </div>
                              </div>
                              <div class="row">
                                <div class="twelve columns">
                                  <p style="color:#DD4B39; margin-bottom:40px;"><em>* Every potential client is important to us, so regardless of your budget, one way or another, we aim to offer a solution.</em></p>
                                </div>
                              </div>
                                <!-- <div class="twelve column">
                                  <li class="form-line" id="id_9">
                                    <label class="form-label-left" id="label_9" for="input_9">
                                      Robot or Human?<span class="form-required">*</span>
                                    </label>
                                    <div id="cid_9" class="">
                                      <script type="text/javascript" src="http://www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>
                                      <div id="recaptcha_input_9" class=" recaptcha_nothad_incorrect_sol recaptcha_isnot_showing_audio" style=""><div id="recaptcha_area"><table id="recaptcha_table" class="recaptchatable recaptcha_theme_clean"> <tbody><tr height="73"> <td class="recaptcha_image_cell" width="302"><center><div id="recaptcha_image" style="width: 300px; height: 57px; "><img style="display:block;" alt="reCAPTCHA challenge image" height="57" width="300" src="http://www.google.com/recaptcha/api/image?c=03AHJ_VuuMZyFwLky424Atdo6DCNRb_zNI9s4p2VZTsVGev3L59lTDVyJ7i06nHkEb8t7wX-D7BAUFWOV7-Nh0-Aht4op7xmDhnraf2XWdDnwJrcZrw_HawL9VW_vx1DzybBAV2RXWKs35YDe7iOJvAjQGH7sZjQJIWw"></div></center></td> <td style="padding: 10px 7px 7px 7px;"> <a id="recaptcha_reload_btn" title="Get a new challenge" href="javascript:Recaptcha.reload();"><img id="recaptcha_reload" width="25" height="18" alt="Get a new challenge" src="http://www.google.com/recaptcha/api/img/clean/refresh.png"></a> <a id="recaptcha_switch_audio_btn" class="recaptcha_only_if_image" title="Get an audio challenge" href="javascript:Recaptcha.switch_type('audio');"><img id="recaptcha_switch_audio" width="25" height="15" alt="Get an audio challenge" src="http://www.google.com/recaptcha/api/img/clean/audio.png"></a><a id="recaptcha_switch_img_btn" class="recaptcha_only_if_audio" title="Get a visual challenge" href="javascript:Recaptcha.switch_type('image');"><img id="recaptcha_switch_img" width="25" height="15" alt="Get a visual challenge" src="http://www.google.com/recaptcha/api/img/clean/text.png"></a> <a id="recaptcha_whatsthis_btn" title="Help" href="http://www.google.com/recaptcha/help?c=03AHJ_VuuMZyFwLky424Atdo6DCNRb_zNI9s4p2VZTsVGev3L59lTDVyJ7i06nHkEb8t7wX-D7BAUFWOV7-Nh0-Aht4op7xmDhnraf2XWdDnwJrcZrw_HawL9VW_vx1DzybBAV2RXWKs35YDe7iOJvAjQGH7sZjQJIWw&amp;hl=en" target="_blank"><img id="recaptcha_whatsthis" width="25" height="16" src="http://www.google.com/recaptcha/api/img/clean/help.png" alt="Help"></a> </td> <td style="padding: 18px 7px 18px 7px;"> <img id="recaptcha_logo" alt="" width="71" height="36" src="http://www.google.com/recaptcha/api/img/clean/logo.png"> </td> </tr> <tr> <td style="padding-left: 7px;"> <div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;"> <span id="recaptcha_challenge_field_holder" style="display: none; "><input type="hidden" name="recaptcha_challenge_field" id="recaptcha_challenge_field" value="03AHJ_VuuMZyFwLky424Atdo6DCNRb_zNI9s4p2VZTsVGev3L59lTDVyJ7i06nHkEb8t7wX-D7BAUFWOV7-Nh0-Aht4op7xmDhnraf2XWdDnwJrcZrw_HawL9VW_vx1DzybBAV2RXWKs35YDe7iOJvAjQGH7sZjQJIWw"></span><input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" autocomplete="off"> </div> </td> <td></td> <td style="padding: 4px 7px 12px 7px;"> <img id="recaptcha_tagline" width="71" height="17" src="http://www.google.com/recaptcha/api/img/clean/tagline.png"> </td> </tr> </tbody></table> </div></div>
                                      <script type="text/javascript">
                                      Recaptcha.create("6Ld9UAgAAAAAAMon8zjt30tEZiGQZ4IIuWXLt1ky", "recaptcha_input_9", {
                              theme: "clean",
                              callback: Recaptcha.focus_response_field
                            });
                                      </script>
                                    </div>
                                  </li>
                                </div> -->

                                  <li class="form-line" id="id_2">
                                    <div id="cid_2" class="form-input-wide">
                                      <div style="text-align:left" class="form-buttons-wrapper">
                                        <button id="input_2" type="submit" class="medium button">
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </li>

                                  <li style="display:none">
                                    Should be Empty:
                                    <input type="text" name="website" value="">
                                  </li>

                              </fieldset>
                            </form>

                          </div>
                        </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <?php include '../mobile-nav.php'; ?>

		</div>

    <?php include '../footer.php'; ?>

  </div>


	<!-- Included JS Files -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="javascripts/foundation/jquery-1.7.1.min.js"><\/script>')</script>
	<!-- Combine and Compress These JS Files -->
	<script src="../javascripts/foundation/jquery.reveal.js"></script>
	<script src="../javascripts/foundation/jquery.orbit-1.4.0.js"></script>
	<script src="../javascripts/foundation/jquery.customforms.js"></script>
	<script src="../javascripts/foundation/jquery.placeholder.min.js"></script>
	<script src="../javascripts/foundation/jquery.tooltips.js"></script>

	<!-- End Combine and Compress These JS Files -->

  <!-- scripts concatenated and minified via build script -->
  <script src="javascripts/app.js"></script>
  <!-- end scripts -->

  <!-- Add FitText -->

  <script type="text/javascript">
    $("h2").fitText(1.1, { minFontSize: 20, maxFontSize: '40px' });
  </script>

  <!-- Add JotForm -->

  <script type="text/javascript" src="../javascripts/foundation/prototype.js"></script>
  <script type="text/javascript" src="../javascripts/foundation/protoplus.js"></script>
  <script type="text/javascript" src="../javascripts/foundation/protoplus-ui.js"></script>
  <script type="text/javascript" src="../javascripts/foundation/jotform.js"></script>

  <script type="text/javascript">
     JotForm.init(function(){
        JotForm.description('input_5', '');
        JotForm.alterTexts({"required":"This field is required.","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","incompleteFields":"There are incomplete required fields. Please complete them.","uploadFilesize":"File size cannot be bigger than:","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than","email":"Enter a valid e-mail address","uploadExtensions":"You can only upload following files:","pleaseWait":"Please wait..."});
     });
  </script>

  <script type="text/javascript" src="../javascripts/foundation/jquery.offcanvas.js"></script>

  <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-26692859-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>

</body>