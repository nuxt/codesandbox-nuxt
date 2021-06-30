<template>
    <div class="success-story-area ptb-70 pt-0">
        <div class="container">
            <div class="section-title">
                <h2>Business success story</h2>
            </div>

            <div class="success-story-inner">
                <div class="success-story-slides owl-carousel owl-theme">
                    <carousel
                        :autplay = "true"
                        :loop = "true"
                        :autoplaySpeed = "true"
                        :autoplayTimeout = "500"
                        :paginationEnabled = "false"
                        :perPage="1"
                        :navigationEnabled = "true"
                        navigationNextLabel="<i class='fas fa-chevron-right'></i>"
                        navigationPrevLabel="<i class='fas fa-chevron-left'></i>"
                    >
                        <slide>
                            <div class="single-success-story-box">
                                <div class="row m-0 align-items-center">
                                    <div class="col-lg-6 col-md-6 p-0">
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                            <h3>John Smith <span>CTO at EnvyTheme</span></h3>
                                            <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="btn btn-primary popup-youtube" target="_blank">Watch Video</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 p-0">
                                        <div class="image">
                                            <img src="../../assets/images/success-story1.jpg" alt="image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-success-story-box">
                                <div class="row m-0 align-items-center">
                                    <div class="col-lg-6 col-md-6 p-0">
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                            <h3>John Smith <span>CTO at EnvyTheme</span></h3>
                                            <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="btn btn-primary popup-youtube" target="_blank">Watch Video</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 p-0">
                                        <div class="image">
                                            <img src="../../assets/images/success-story1.jpg" alt="image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SuccessStory'
    }
</script>