<template>
    <div :class="['navbar-area navbar-style-two', {'is-sticky': isSticky}]">
        <div class="luvion-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/black-logo.png" alt="image">
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/#" class="nav-link">
                                    Home <i class="fas fa-chevron-down"></i>
                                </router-link>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">
                                            Home Demo - 1
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-two" class="nav-link">
                                            Home Demo - 2
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-three" class="nav-link">
                                            Home Demo - 3
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/home-demo-four" class="nav-link">
                                            Home Demo - 4
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/about-us" class="nav-link">
                                    About Us
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/#" class="nav-link">
                                    Features <i class="fas fa-chevron-down"></i>
                                </router-link>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/features-1" class="nav-link">
                                            Features Style One
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/features-2" class="nav-link">
                                            Features Style Two
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
 
                            <li class="nav-item">
                                <router-link to="/#" class="nav-link">
                                    Pages <i class="fas fa-chevron-down"></i>
                                </router-link>

                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/about-us" class="nav-link">
                                            About Us
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/#" class="nav-link">
                                            Features <i class="fas fa-chevron-down"></i>
                                        </router-link>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/features-1" class="nav-link">
                                                    Features Style One
                                                </router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/features-2" class="nav-link">
                                                    Features Style Two
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">
                                            Team
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/pricing" class="nav-link">
                                            Pricing
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/login" class="nav-link">
                                            Login
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/register" class="nav-link">
                                            Register
                                        </router-link>
                                    </li>
 
                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">
                                            FAQ
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/error" class="nav-link">
                                            Error Page
                                        </router-link>
                                    </li>
 
                                    <li class="nav-item">
                                        <router-link to="/terms-condition" class="nav-link">
                                            Terms & Conditions
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/privacy-policy" class="nav-link">
                                            Privacy Policy
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/pricing" class="nav-link">
                                    Pricing
                                </router-link>
                            </li>
 
                            <li class="nav-item">
                                <router-link to="/#" class="nav-link">
                                    Blog <i class="fas fa-chevron-down"></i>
                                </router-link>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/blog-1" class="nav-link">
                                            Blog Grid
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-2" class="nav-link">
                                            Blog Right Sidebar
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-details" class="nav-link">
                                            Blog Details
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">
                                    Contact
                                </router-link>
                            </li>
                        </ul>

                        <div class="others-options">
                            <router-link to="/login" class="login-btn">
                                <i class="flaticon-user"></i> Log In
                            </router-link>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavbarStyleTwo',
        data(){
            return {
                isSticky: false
            }
        },

        mounted(){
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    that.isSticky = true
                } else {
                    that.isSticky = false
                }
            })
        }
    }
</script>