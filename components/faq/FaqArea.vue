<template>
    <div class="faq-area ptb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="faq-content">
                        <h2>Frequently Asked Questions</h2>
                        <div class="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div class="faq-image">
                            <img src="../../assets/images/faq.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <div class="accordion" role="tablist">
                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-1 variant="info">Which material types can you work with? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-2 variant="info">Is Smart Lock required for instant apps? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-3 variant="info">Can I have multiple activities in a single feature? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-4 variant="info">Which material types can you work with? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-5 variant="info">Why Choose Our Services In Your Business? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="btn-primary" block v-b-toggle.accordion-6 variant="info">How To Get Start With Us? <span></span></b-button>
                            </b-card-header>
                            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="faq-contact">
                <div class="section-title">
                    <h2>Do You Have Any Questions</h2>
                    <div class="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="faq-contact-form">
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
                                <button type="submit" class="btn btn-primary">Send Message</button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FaqArea',
        data() {
      return {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        `
      }
    }
    }
</script>