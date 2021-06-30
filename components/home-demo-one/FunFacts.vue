<template>
    <div class="funfacts-area ptb-70 pt-0">
        <div class="container">
            <div class="section-title">
                <h2>We always try to understand customers expectation</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                    <div class="funfact">
                        <h3>180K</h3>
                        <p>Downloaded</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                    <div class="funfact">
                        <h3>20K</h3>
                        <p>Feedback</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                    <div class="funfact">
                        <h3>500+</h3>
                        <p>Workers</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                    <div class="funfact">
                        <h3>70+</h3>
                        <p>Contrubutors</p>
                    </div>
                </div>
            </div>

            <div class="contact-cta-box">
                <h3>Have any question about us?</h3>
                <p>Don't hesitate to contact us</p>
                <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
            </div>

            <div class="map-bg">
                <img src="../../assets/images/map.png" alt="map">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FunFacts'
    }
</script>