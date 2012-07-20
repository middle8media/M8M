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
  			<div class="row">
  			  <div class="eight columns">
  			    <h3>Off Canvas Nav Sidebar on Mobile</h3>
      			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nulla massa. Sed ultricies posuere tincidunt. Morbi dolor est, aliquet quis egestas eu, consectetur nec neque. Etiam velit libero, congue eu accumsan sit amet, eleifend et sem. Donec ac felis sed sapien placerat venenatis. Fusce id tempus nunc. Vestibulum pellentesque vulputate tempus. Suspendisse sed consequat lectus. Nulla bibendum venenatis eros, elementum malesuada mi imperdiet eu. Fusce ornare gravida nulla, sed scelerisque sem scelerisque at.</p>

      			<p>Mauris consectetur elementum massa nec convallis. Integer mauris purus, condimentum vitae mattis a, vehicula lacinia justo. Pellentesque scelerisque orci at ligula cursus eu tempor elit euismod. Donec eleifend, turpis in vulputate eleifend, orci lectus eleifend quam, et ultrices mi nisi id nulla. Nullam est magna, varius nec consectetur vel, pellentesque ac justo. Vivamus commodo pellentesque ante, sed semper nulla congue non. Nunc nec augue sed nibh dapibus accumsan. Nullam in mauris quis lacus ultricies convallis. Morbi semper suscipit elit ut suscipit. Donec lobortis tellus lorem.</p>
      		</div>
          <div id="aside" class="four columns">
            <p>We hope you enjoyed watching our handcrafted short films, mini-docs and web videos as much as we did making them. You can watch these and our other films on <a href="https://vimeo.com/middle8media"target="_blank"  >Vimeo</a>.</p>
            <p>If you would like us to produce a film for your business, event, family etc... please <a href="mailto:seth@middle8media.com?subject=Film Production" "email us">email us</a>.</p>
            <p>For our feature film efforts, visit <a href="http://newriverreleasing.com" target="_blank"  title="New River Releasing">New River Releasing</a>.</p>
          </div>
        </div>
  		</section>

      <?php include '../mobile-nav.php'; ?>

		</div>

    <footer class="site-footer row" role="contentinfo">
      <div class="twelve columns">
        © 2012 Middle8Media | Greensboro, NC
      </div>
    </footer>
  </div>


	<!-- Included JS Files -->
	<script src="../javascripts/jquery.min.js"></script>
	<!-- Combine and Compress These JS Files -->
	<script src="../javascripts/foundation/jquery.reveal.js"></script>
	<script src="../javascripts/foundation/jquery.orbit-1.4.0.js"></script>
	<script src="../javascripts/foundation/jquery.customforms.js"></script>
	<script src="../javascripts/foundation/jquery.placeholder.min.js"></script>
	<script src="../javascripts/foundation/jquery.tooltips.js"></script>
	<!-- End Combine and Compress These JS Files -->
	<script src="../javascripts/app.js"></script>

  <script type="text/javascript" src="../javascripts/foundation/jquery.offcanvas.js"></script>

</body>