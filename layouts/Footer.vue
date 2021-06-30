<template>
    <div>
        <footer class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <router-link to="/"><img src="../../assets/images/ispc_logo.png" style="width:145px;" alt="logo"></router-link>
                                <p>เราเป็นบริษัทชั้นนำสำหรับให้บริการทางด้าน Payment Gateway การปรับใช้ Business Solutions ที่ดีที่สุดแก่ลูกค้าในประเทศและต่างประเทศ</p>
                            </div>

                            <ul class="social-links">
                                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Company</h3>

                            <ul class="list">
                                <li><router-link to="/about-us">เกี่ยวกับเรา</router-link></li>
                                <li><router-link to="/service">บริการของเรา</router-link></li>
                                <li><router-link to="/pricing">ค่าธรรมเนียม</router-link></li>
                                <li><router-link to="/contact">ติดต่อเรา</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>Support</h3>

                            <ul class="list">
                                <li><router-link to="/privacy-policy">นโยบายความปลอดภัย</router-link></li>
                                <li><router-link to="/terms-condition">เงื่อนไขการใช้บริการ</router-link></li>
                                <!-- <li><router-link to="/blog-2">Blog</router-link></li>
                                <li><router-link to="/#">Community</router-link></li>
                                <li><router-link to="/contact">Contact Us</router-link></li> -->
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>Address</h3>

                            <ul class="footer-contact-info">
                                <li><span>เลขที่:</span>128/38 อาคารพญาไทพลาซ่า ชั้น4 ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</li>
                                <li><span>Email:</span> <a href="mailto:info@ismartpay.com">info@ismartpay.com</a></li>
                                <li><span>Phone:</span> <a href="tel:+321984754">02-xxx-xxxx</a></li>
                                <li><span>Fax:</span> <a href="tel:+12129876543">02-xxx-xxxx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="copyright-area">
                    <!-- <p>Copyright @2020 Vibion. All rights reserved <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a></p> -->
                    <p>© 2021 iSmartPay. All Rights Reserved</p>
                </div>
            </div>

            <div class="map-image"><img src="../../assets/images/map.png" alt="map"></div>
        </footer>
        <!-- End Footer Area -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top">
                <i class="fas fa-arrow-up"></i>
            </div>
        </back-to-top>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>