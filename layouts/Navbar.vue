<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="luvion-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/ispc_logo.png" style="width: 250px;" alt="image">
                        <img src="../../assets/images/ispc_logo.png" style="width: 250px;" alt="image">
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/service" class="nav-link">
                                    บริการของเรา
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/pricing" class="nav-link">
                                    ค่าธรรมเนียม
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/enterprise" class="nav-link">
                                    ธุรกิจขนาดใหญ่
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/privilege" class="nav-link">
                                    สิทธิพิเศษ
                                </router-link>
                            </li>
                            <!-- <li class="nav-item">
                                <router-link to="/faq" class="nav-link">
                                    คู่มือการใช้งาน
                                </router-link>
                            </li> -->
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">
                                    ติดต่อเรา
                                </router-link>
                            </li>
                        </ul>

                        <div class="others-options">
                            <!-- <router-link to="/login" class="login-btn">
                                <i class="flaticon-user"></i>เข้าสู่ระบบ
                            </router-link> -->
                            <a href="https://sandbox.ismartpay.co/login.php" class="login-btn">
                                <i class="flaticon-user"></i>เข้าสู่ระบบ
                            </a>
                        </div>
                        <div class="others-options">
                            <router-link to="/register" class="login-btn">
                                <i class="flaticon-user"></i>สร้างบัญชี
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
        name: 'Navbar',
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