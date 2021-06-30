<template>
    <div class="feedback-area ptb-70 bg-f7fafd">
        <div class="container">
            <div class="section-title">
                <h2>What customers say about Us</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="feedback-slides">
                <div class="client-feedback">
                    <div>
                        <slick
                            ref="slick"
                            :options="slickOptions"
                            :asNavFor = "$refs.slick2"
                        >
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-1.jpg" alt="image">
                                    </div>

                                    <h3>John Lucy</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-2.jpg" alt="image">
                                    </div>

                                    <h3>John Smith</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-3.jpg" alt="image">
                                    </div>

                                    <h3>Maxwel Warner</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-4.jpg" alt="image">
                                    </div>

                                    <h3>Ross Taylor</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-5.jpg" alt="image">
                                    </div>

                                    <h3>James Anderson</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-1.jpg" alt="image">
                                    </div>

                                    <h3>Steven Smith</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-2.jpg" alt="image">
                                    </div>

                                    <h3>Steven Lucy</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/images/clients/client-3.jpg" alt="image">
                                    </div>

                                    <h3>John Terry</h3>
                                    <span>Web Developer</span>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </slick>
                    </div>
                </div>

                <div class="client-thumbnails">
                    <div>
                        <slick
                            ref = "slick2"
                            :asNavFor = "$refs.slick"
                            :options="slickOptions2"
                        >
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-1.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-2.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-3.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-4.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-5.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-1.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-2.jpg" alt="client"></div>
                            </div>
                            
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/images/clients/client-3.jpg" alt="client"></div>
                            </div>
                        </slick>
                    </div>

                    <button class="prev-arrow slick-arrow">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    
                    <button class="next-arrow slick-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
import Slick from 'vue-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
export default {
    name: 'Feedback',
    components: { Slick },
    data() {
        return {
            slickOptions: {
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                fade: true,
                autoplay: true,
                draggable: true,
                prevArrow: '.client-feedback .prev-arrow',
                nextArrow: '.client-feedback .next-arrow'
            },
            slickOptions2: {
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                focusOnSelect: true,
                prevArrow: '.client-thumbnails .prev-arrow',
                nextArrow: '.client-thumbnails .next-arrow',
            },
        };
    },

    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        }
    }
}
</script>