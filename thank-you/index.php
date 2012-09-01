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

	<title>Middle8Media - a Digital Media Studio - Thank You</title>
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
        <h2>Thank You for Contacting Us!</h2>
  			<div class="row">
  			  <div class="eight columns">

            <div class="panel radius">
                <p><i class="icon-asterisk icon-large style1"></i> <em>We will respond to your message shortly. In the meantime, check out this classic video and connect with us via our social networks.</em></p>
            </div>
            <div class="fitvids">
              <iframe width="560" height="315" src="http://www.youtube.com/embed/a_JCzZAqqQg" frameborder="0" allowfullscreen></iframe>
            </div>

      		</div>

          <div id="aside" class="four columns">
            <blockquote>"At Middle8Media the relationships we form with our clients are of the upmost importance. That's why we give each client and project the personal attention needed to create solutions for a particular need. We take pride in producing high quality, standardized websites and unique, handcrafted films that share your vision with the world. This is our promise to you. So if this sounds like the kind of relationship you desire, please connect with us. We would love to discuss your next project."
            </blockquote>

            <blockquote class="quote"><cite>Seth Hall, Founder</cite></blockquote>

              <div class="social-networks panel radius">
                <h5>Social Networks</h5>
                <ul>
                  <li><span class="glyph social facebook"><a href="http://www.facebook.com/middle8media" target="_blank" title="M8M on Instagram">d </a></span></li>
                  <li><span class="glyph social twitter"><a href="http://twitter.com/middle8media" target="_blank" title="M8M on Instagram">y </a></span></li>
                  <li><span class="glyph social instagram"><a href="http://followgram.me/middle8media" target="_blank" title="M8M on Instagram">t </a></span></li>
                </ul>
              </div>

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
  <script src="../javascripts/app.js"></script>
  <!-- end scripts -->

  <!-- Add FitText -->

  <script type="text/javascript">
    $("h2").fitText(1.1, { minFontSize: 20, maxFontSize: '40px' });
  </script>

  <!-- Add FitVids -->

  <script>
    $(document).ready(function(){
      $(".fitvids").fitVids();
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