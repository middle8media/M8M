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

	<title>Middle8Media - a Digital Media Studio - Web Design, Web Developement, Filmmaking</title>
	<meta name="keywords" content="Greensboro, North Carolina, Web Design, Web Development, Film, Video, Filmmaking, Videography, Triad, Winston-Salem, High Point, Triangle, Raleigh, Durham, Chapel Hill">
	<meta name="description" content="We design & develop beautifully responsive websites, as well as produce unique & engaging films, for the artist & entrepreneur alike.">

	<!-- Included CSS Files -->
	<link rel="stylesheet" href='stylesheets/ac87740.css'>

	<!--[if lt IE 9]>
		<link rel="stylesheet" href="css/ie.css">
	<![endif]-->

  	<script type="text/javascript" src="http://use.typekit.com/kbo4elj.js"></script>
  	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<script src="javascripts/foundation/modernizr.foundation.js"></script>

	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

  <body id="page" class="off-canvas hide-extras">
	<div class="container">

		<header id="header" class="row">
      <?php include 'nav.php'; ?>
		</header>

		<div class="row">
   		<section role="main">
        <h2>Welcome to Middle8Media.com</h2>
        <!-- <h3 class="show-for-small">Welcome to Middle8Media.com</h3> -->
  			<div class="row">
  			  <div class="eight columns last">

            <div id="featured"> <!-- these are being served at @2x resolution -->
              <img src="../images/responsive-slide.jpg" />
              <img src="../images/front-end-slide.jpg" />
              <img src="../images/wordpress-slide.jpg" />
              <img src="../images/video-slide.jpg" />
            </div>
            <p>Middle8Media is a digital media studio based in Greensboro, North Carolina. Our dream is to work and succeed in a field that we love and our mission is to help you and your business do the same. We promise to give each client and each project the individual attention needed to build great relationships and beautiful product. If this sounds like the kind of relationship you desire, please consider hiring us for your next project.</p>
      		</div>
          <div id="aside" class="four columns">
            <blockquote>"At M8M we believe that it's possible to make your living doing what you love and the company was founded with the hopes of helping you do just that. Whether you own a small business or have your own traveling high wire act, our mission is to design & develop beautifully responsive websites, as well as produce unique & engaging films, for the artist & entrepreneur alike. If you're ready to share your talent & vision with the world, please consider hiring us for your next project."
            </blockquote>
            <blockquote class="quote"><cite>Seth Hall, Founder</cite></blockquote>
          </div>
        </div>

        <div class="row">
          <div class="eight columns ">
            <div class="panel">
            <h3>We specialize in:</h3>

              <ul>
	            <li>✪ Web Design</li>
                <li>✪ Front-End Development (<span class="html">HTML5</span>, <span class="css">CSS3</span> & <span class="js">jQuery</span>)</li>
                <li>✪ Responsive/Mobile Ready Web Design</li>
                <li>✪ Wordpress Installation & Customization</li>
                <li>✪ Film & Video Production</li>
              </ul>

            <h5>We are skilled in:</h5>
              <ul>
                <li>✪ Graphic Design (<span class="adobe">Adobe Creative Suite</span>)</li>
                <li>✪ Back-End Technologies such as PHP and MySQL</li>
                <li>✪ Consulting in Cutting Edge Online Technologies</li>
                <li>✪ Creating Solutions for your Online Needs</li>
              </ul>
            </div>
          </div>

          <div class="four columns">
              <?php include 'project-status.php'; ?>
              <?php include 'current-project.php'; ?>
          </div>
        </div>
      </section>

      <?php include 'mobile-nav.php'; ?>

		</div>

    <?php include 'footer.php'; ?>

  </div>

	<!-- Included JS Files -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="javascripts/foundation/jquery-1.7.1.min.js"><\/script>')</script>
	<!-- Combine and Compress These JS Files -->
	<script src="javascripts/foundation/jquery.reveal.js"></script>
	<script src="javascripts/foundation/jquery.orbit-1.4.0.js"></script>
	<script src="javascripts/foundation/jquery.customforms.js"></script>
	<script src="javascripts/foundation/jquery.placeholder.min.js"></script>
	<script src="javascripts/foundation/jquery.tooltips.js"></script>
	<!-- End Combine and Compress These JS Files -->

  <script defer src='javascripts/c49194f.js'></script>

  <!-- Add fancyBox -->

  <script type="text/javascript">
    $(document).ready(function() {
      $(".fancybox").fancybox();
    });
  </script>

  <!-- Add Orbit -->

  <script type="text/javascript">
   $(window).load(function() {
       $('#featured').orbit();
   });
  </script>

  <!-- Add FitText -->

  <script type="text/javascript">
    $("h2").fitText(1.1, { minFontSize: 20, maxFontSize: '40px' });
  </script>

  <script type="text/javascript" src="javascripts/foundation/jquery.offcanvas.js"></script>
  <script type="text/javascript" src="../javascripts/jquery.fancybox.pack.js?v=2.0.6"></script>

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