<template>
    <div class="contact-area ptb-70">
        
        <div class="container">
            <!-- <div class="section-title">
                <h2>Let’s talk business</h2>
                <div class="bar"></div>
                <p>We’d love to talk about how we can work together.</p>
            </div> -->

            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="contact-info">
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <span>ที่อยู่</span>
                                128/38 อาคารพญาไทพลาซ่า ชั้น4 ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <span>อีเมล</span>
                                <a href="mailto:info@ismartpay.com">info@ismartpay.com</a>
                                <a href="mailto:ismartpay@gmail.com">ismartpay@gmail.com</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fas fa-phone-volume"></i>
                                </div>
                                <span>โทรศัพท์</span>
                                <a href="tel:+0200000000">02-xxx-xxxx</a>
                                <a href="tel:+0200000000">02-xxx-xxxx</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="contact-form">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Phone">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Subject">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Your Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="btn btn-primary">ส่งข้อความ</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-map"><img src="../../assets/images/bg-map.png" alt="image"></div>

        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.371111283066!2d100.52962011483051!3d13.756479790344402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eca8e6778b3%3A0xd4ef3714cbf0dbfc!2z4Lie4LiN4Liy4LmE4LiXIOC4nuC4peC4suC4i-C5iOC4siDguYHguILguKfguIcg4LiX4Li44LmI4LiH4Lie4LiN4Liy4LmE4LiXIOC5gOC4guC4leC4o-C4suC4iuC5gOC4l-C4p-C4tSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTA0MDA!5e0!3m2!1sth!2sth!4v1621920491378!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactArea'
    }
</script>