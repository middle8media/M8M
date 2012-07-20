<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />

	<title>Middle8Media - a Digital Media Studio</title>

	<!-- Included CSS Files -->
	<link rel="stylesheet" href="stylesheets/app.css">

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
  			<div class="row">
  			  <div class="eight columns last">

            <div id="featured">
              <img src="../images/front-end.jpg" />
              <img src="../images/responsive.jpg" />
              <img src="../images/wordpress.jpg" />
              <img src="../images/video.jpg" />
            </div>
      		</div>
          <div id="aside" class="four columns">
            <blockquote>"At M8M we believe that it's possible to make your living doing what you love and the company was founded with the hopes of helping you do just that. Whether you own a small business or have your own traveling high wire act, our wish is to design & develop beautiful websites as well as produce unique & engaging films for the artist & entrepreneur alike, who desire to share their talents & visions with the world."
            </blockquote>
            <blockquote class="quote"><img src="images/seth.png" alt="Seth Hall - Founder of Middle8Media"><cite>Seth Hall, Founder</cite></blockquote>

          </div>
        </div>
        <div class="row">
          <div class="twelve columns">
            <p>Middle8Media is a digital media studio based in Greensboro, North Carolina. Our dream is to work and succeed in a field that we love and our mission is to help you and your business do the same.</p> <!-- Take a look at our <a href="web" title="web portfolio">web portfolio</a> & our <a href="film" title="film productions">films</a>  <a href="connect">hiring us</a>. We would love to work with you &amp; live the dream together. -->
          </div>
        </div>
        <div class="row">
          <div class="eight columns ">
            <div class="panel radius">
            <h3>We specialize in:</h3>

              <ul>
                <li><span class="glyph general-enclosed style1">c </span>Front-End Development (<span class="html">HTML5</span>, <span class="css">CSS3</span> & <span class="js">jQuery</span>)</li>
                <li><span class="glyph general-enclosed style1">c </span>Responsive/Mobile Ready Web Design</li>
                <li><span class="glyph general-enclosed style1">c </span>Wordpress Customization</li>
                <li><span class="glyph general-enclosed style1">c </span>Film & Video Production</li>
              </ul>

            <h5>We are skilled in:</h5>
              <ul>
                <li><span class="glyph general-enclosed style1">c </span>Back-End technologies such as PHP and MySQL</li>
                <li><span class="glyph general-enclosed style1">c </span>Photoshop & Illustrator</li>
              </ul>
            </div>
          </div>

          <div class="four columns">
              <?php include 'project-status.php'; ?>
          </div>
        </div>
        </div>
  		</section>

      <?php include 'mobile-nav.php'; ?>

		</div>

    <footer class="site-footer row" role="contentinfo">
      <div class="twelve columns">
        <p>© 2012 Middle8Media | Greensboro, NC</p>
      </div>
    </footer>
  </div>

	<!-- Included JS Files -->
	<script src="javascripts/jquery.min.js"></script>
	<!-- Combine and Compress These JS Files -->
	<script src="javascripts/foundation/jquery.reveal.js"></script>
	<script src="javascripts/foundation/jquery.orbit-1.4.0.js"></script>
	<script src="javascripts/foundation/jquery.customforms.js"></script>
	<script src="javascripts/foundation/jquery.placeholder.min.js"></script>
	<script src="javascripts/foundation/jquery.tooltips.js"></script>
	<!-- End Combine and Compress These JS Files -->
	<script src="javascripts/app.js"></script>

  <script type="text/javascript" src="javascripts/foundation/jquery.offcanvas.js"></script>

  <script type="text/javascript">
   $(window).load(function() {
       $('#featured').orbit();
   });
  </script>

</body>