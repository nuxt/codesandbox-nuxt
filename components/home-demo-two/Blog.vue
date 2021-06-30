<template>
    <div class="blog-area ptb-70 pt-0">
        <div class="container">
            <div class="section-title">
                <h2>The News from Our Blog</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-1.jpg" alt="image">
                            </router-link>

                            <div class="date">
                                <i class="far fa-calendar-alt"></i> September 15, 2019
                            </div>
                        </div>

                        <div class="blog-post-content">
                            <h3><router-link to="/blog-details">The security risks of changing package owners</router-link></h3>

                            <span>By <a href="#">admin</a></span>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                            <router-link to="/blog-details" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-2.jpg" alt="image">
                            </router-link>

                            <div class="date">
                                <i class="far fa-calendar-alt"></i> September 17, 2019
                            </div>
                        </div>

                        <div class="blog-post-content">
                            <h3><router-link to="/blog-details">Tips to Protecting Business and Family</router-link></h3>

                            <span>By <a href="#">admin</a></span>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                            <router-link to="/blog-details" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post">
                        <div class="blog-image">
                            <router-link to="/blog-details">
                                <img src="../../assets/images/blog/blog-3.jpg" alt="image">
                            </router-link>

                            <div class="date">
                                <i class="far fa-calendar-alt"></i> September 19, 2019
                            </div>
                        </div>

                        <div class="blog-post-content">
                            <h3><router-link to="/blog-details">Protect Your Workplace from Cyber Attacks</router-link></h3>

                            <span>By <a href="#">admin</a></span>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                            <router-link to="/blog-details" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Blog'
    }
</script>