<template>
<div>
<div class="page-loader"></div>  <!-- Display loading image while page loads -->
<div class="body">

    <!--========== BEGIN HEADER ==========-->
    <header id="header" class="header-main">

        <!-- Begin Navbar -->
        <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
            <!-- Classes: navbar-default, navbar-inverse, navbar-fixed-top, navbar-fixed-bottom, navbar-transparent. Note: If you use non-transparent navbar, set "height: 98px;" to #header -->

            <div class="container">

                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand page-scroll" href="index.html">Platon Adworks</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="page-scroll" href="body">Ana Sayfa</a></li>
                        <li><a class="page-scroll" href="#about-section">Hakkımızda</a></li>
                        <li><a class="page-scroll" href="#services-section">Hizmetlerimiz</a></li>
                        <li><a class="page-scroll" href="#portfolio-section">İşlerimiz</a></li>
                        <li><a class="page-scroll" href="#contact-section">İletişim</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container -->
        </nav>
        <!-- End Navbar -->

    </header>
    <!-- ========= END HEADER =========-->


    <!-- Begin text carousel intro section -->
    <section id="text-carousel-intro-section">
        <div class="parallax" data-stellar-background-ratio="0.5"
             style="width: 100%;background-image: url(img/slider-bg.jpg);background-position: 0px 0px;height: 100%;position: absolute;filter: blur(10px);"></div>

        <div class="container">
            <div class="caption text-center text-white" data-stellar-ratio="0.7">

                <div id="owl-intro-text" class="owl-carousel">
                    <div class="item">
                        <h1>İşinizi dijitalde büyütün.</h1>
                        <p>Şimdi katılın.</p>
                        <div class="extra-space-l"></div>
                        <a class="btn btn-blank page-scroll" href="#contact-section">İletişim</a>
                    </div>

                </div>

            </div> <!-- /.caption -->
        </div> <!-- /.container -->

    </section>
    <!-- End text carousel intro section -->


    <!-- Begin about section -->
    <section id="about-section" class="page bg-style1">
        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h2>Hakkımızda</h2>
                    <div class="devider"></div>
                </div>
            </div>
        </div>
        <!-- End page header-->

        <!-- Begin rotate box-1 -->
        <div class="rotate-box-1-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                            <span class="rotate-box-icon"><i class="fa fa-users"></i></span>
                            <div class="rotate-box-info">
                                <h4>Biz kimiz?</h4>
                                <p>Platon Adworks, uzun yıllarca sektörde çalışmış deneyimli bir ekip tarafından
                                    sektörün ihtiyaçlarını ve gereksinimlerini belirleyerek
                                    gereken hizmetleri müşterilerine vermeyi amaçlayan bir oluşumdur.
                                    .</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                            <span class="rotate-box-icon"><i class="fa fa-diamond"></i></span>
                            <div class="rotate-box-info">
                                <h4>Neler Yapıyoruz ?</h4>
                                <p>Sosyal medya yönetiminden Kurumsal Kimlik tasarımına, Web sitesi oluşturulmasından
                                    markanızın fotoğraf ve video çekimine kadar yanınızdayız. Kısacası dijital iletişim
                                    gereksinimlerinizi 360 derece karşılıyoruz. </p>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                            <span class="rotate-box-icon"><i class="fa fa-heart"></i></span>
                            <div class="rotate-box-info">
                                <h4>Nasıl Yapıyoruz ?</h4>
                                <p>Müşterilerimizin ve markalarımızın hedeflerini ve hedef kitlelerini belirleyerek,
                                    onları en kısa sürede, en kolay yoldan doğru bir biçimde hedeflerine ulaştırmayı
                                    amaçlar ve bunları rasyonel bir şekilde uygularız. </p>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
                            <span class="rotate-box-icon"><i class="fa fa-clock-o"></i></span>
                            <div class="rotate-box-info">
                                <h4>Nasıl Çalışırız ?</h4>
                                <p>Biz Platon’da işleri en kısa yoldan, en kısa sürede çözeriz.

                                    Süslü kelimelerle yolu uzatmaz, yolunuzu işlerimizle süsleriz.
                                </p>
                            </div>
                        </a>
                    </div>

                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div>
        <!-- End rotate box-1 -->

        <div class="extra-space-l"></div>

        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h4>Yeteneklerimiz</h4>
                </div>
            </div>
        </div>
        <!-- End page header-->

        <!-- Begin Our Skills -->
        <div class="our-skills">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.2s">
                            <div class="progress-lebel">
                                <h6>Dijital Pazarlama </h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInRight" data-wow-delay="0.2s">
                            <div class="progress-lebel">
                                <h6>Web Tasarım</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.4s">
                            <div class="progress-lebel">
                                <h6>Sosyal Medya Yönetimi </h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInRight" data-wow-delay="0.4s">
                            <div class="progress-lebel">
                                <h6>Kurumsal Kimlik Tasarımı</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>

                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div>
        <!-- End Our Skill -->
    </section>
    <!-- End about section -->


    <!-- Begin Services -->
    <section id="services-section" class="page text-center">
        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                    <h2>Hizmetlerimiz</h2>
                    <div class="devider"></div>
                </div>
            </div>
        </div>
        <!-- End page header-->

        <!-- Begin roatet box-2 -->
        <div class="rotate-box-2-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0">
                            <span class="rotate-box-icon"><i class="fa fa-mobile"></i></span>
                            <div class="rotate-box-info">
                                <h4>Web Tasarım</h4>

                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.2s">
                            <span class="rotate-box-icon"><i class="fa fa-pie-chart"></i></span>
                            <div class="rotate-box-info">
                                <h4>Dijital Pazarlama</h4>

                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.4s">
                            <span class="rotate-box-icon"><i class="fa fa-camera-retro"></i></span>
                            <div class="rotate-box-info">
                                <h4>Fotoğraf & Video</h4>

                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.6s">
                            <span class="rotate-box-icon"><i class="fa fa-users"></i></span>
                            <div class="rotate-box-info">
                                <h4>Kurumsal Kimlik</h4>

                            </div>
                        </a>
                    </div>

                </div> <!-- /.row -->
            </div> <!-- /.container -->

            <div class="container">
                <!-- Cta Button -->
                <div class="extra-space-l"></div>

            </div> <!-- /.container -->
        </div>
        <!-- End rotate-box-2 -->
    </section>
    <!-- End Services -->


    <!-- Begin testimonials -->
    <section id="testimonial-section">
        <div id="testimonial-trigger" class="testimonial text-white parallax" data-stellar-background-ratio="0.5"
             style="background-image: url(img/testimonial-bg.jpg);">
            <div class="cover"></div>
            <!-- Begin page header-->
            <div class="page-header-wrapper">
                <div class="container">
                    <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                        <h2>Work smart, make it simple.</h2>
                        <div class="devider"></div>
                    </div>
                </div>
            </div>
            <!-- End page header-->

        </div>
    </section>
    <!-- End testimonials -->
    <div class="container"></div>

    <!-- Begin Portfolio -->
    <section id="portfolio-section" class="page bg-style1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="portfolio">
                        <!-- Begin page header-->
                        <div class="page-header-wrapper">
                            <div class="container">
                                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <h2>İşlerimiz</h2>
                                    <div class="devider"></div>
                                </div>
                            </div>
                        </div>
                        <!-- End page header-->
                        <div class="portfolio_content">
                            <div class="row" id="portfolio">
                                <div class="col-xs-12 col-sm-4 appsDevelopment">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281053499?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 GraphicDesign">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/354320991?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 responsive">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281053854?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 webDesign websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281045853?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 appsDevelopment websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281045199?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 GraphicDesign">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281037828?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 responsive">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/281013716?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 GraphicDesign">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277263866?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277263119?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277264701?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277262539?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277260173?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277258222?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277257115?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277255774?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277255268?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277254316?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277253595?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277251996?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/277249494?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 websites">
                                    <div class="portfolio_single_content">
                                        <iframe src="https://player.vimeo.com/video/656966644?h=6453d4cfa6&color=ffffff&title=0&byline=0&portrait=0"
                                                width="356" height="200" frameborder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowfullscreen></iframe>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End portfolio -->


    <!-- Begin partners -->
    <section id="partners-section">
        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                    <h2>Müşterilerimiz</h2>
                    <div class="devider"></div>
                </div>
            </div>
        </div>
        <!-- End page header-->
        <div class="container">
            <div id="owl-partners" class="owl-carousel">
                <img src="img/partners/fitthink.png" alt="img">
                <img src="img/partners/ycesoy.png" alt="img">
                <img src="img/partners/mycareer.png" alt="img">
                <img src="img/partners/gazikentlogo.png" alt="img">
                <img src="img/partners/zeybek.png" alt="img">
                <img src="img/partners/decathlon.png" alt="img">
            </div>
        </div>
    </section>
    <!-- End partners -->


    <!-- Begin social section -->
    <section id="social-section">

        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                    <h2>Bizi Takip Edin</h2>
                    <div class="devider"></div>
                    <p class="subtitle">Platonu yakından görün</p>
                </div>
            </div>
        </div>
        <!-- End page header-->

        <div class="container">
            <ul class="social-list">
                <li><a href="#" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.3s"><span
                        class="rotate-box-icon"><i class="fa fa-facebook"></i></span></a>
                </li>
                <li><a href="#" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.3s"><span
                        class="rotate-box-icon"><i class="fa fa-instagram"></i></span></a>
                </li>
                <li><a href="#" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.4s"><span
                        class="rotate-box-icon"><i class="fa fa-twitter"></i></span></a>
                </li>
                <li><a href="#" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.5s"><span
                        class="rotate-box-icon"><i class="fa fa-linkedin-square"></i></span></a>
                </li>

                <li><a href="#" class="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.8s"><span
                        class="rotate-box-icon"><i class="fa fa-behance"></i></span></a>
                </li>
            </ul>
        </div>

    </section>
    <!-- End social section -->


    <!-- Begin contact section -->
    <section id="contact-section" class="page text-white parallax" data-stellar-background-ratio="0.5"
             style="background-image: url(img/map-bg.jpg);">
        <div class="cover"></div>

        <!-- Begin page header-->
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                    <h2>İletişim</h2>
                    <div class="devider"></div>
                    <p class="subtitle">Bize ulaşın</p>
                </div>
            </div>
        </div>
        <!-- End page header-->

        <div class="contact wow bounceInRight" data-wow-delay="0.4s">
            <div class="container">
                <div class="row">

                    <div class="col-md-offset-5 col-sm-7">
                        <div class="contact-info">
                            <h4>Adresimiz</h4>
                            <ul class="contact-address">
                                <li><i class="fa fa-map-marker fa-lg"></i>&nbsp; Adalet Mah. Manas Bulv.
                                    No:47/B </br></br> Folkart
                                    Towers, 35530 Bayraklı
                                </li>
                                <li><i class="fa fa-phone"></i>&nbsp;+90 553 877 77 67</li>
                                <li><i class="fa fa-envelope"></i> info@platonadworks.com</li>
                            </ul>
                        </div>
                    </div>


                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div>
    </section>
    <!-- End contact section -->


    <!-- Begin footer -->
    <footer class="text-off-white">


        <div class="footer">
            <div class="container text-center wow fadeIn" data-wow-delay="0.4s">
                <p class="copyright">Copyright &copy; 2022 - Tasarım <a href="#" class="theme-author">Plato Adworks</a>
                </p>
            </div>
        </div>

    </footer>
    <!-- End footer -->

    <a href="#" class="scrolltotop"><i class="fa fa-arrow-up"></i></a> <!-- Scroll to top button -->

</div><!-- body ends -->




</div>
</template>
