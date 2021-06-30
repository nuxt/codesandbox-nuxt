<template>
    <div>
        <div class="page-title-area item-cu-bg3" style="padding-top: 130px; padding-bottom: 80px;">
            <div class="container">
                <div class="page-title-content">
                    <h2>สมัครสมาชิก</h2>
                </div>
            </div>
        </div>
        <div class="login-area">
            <div class="row m-0">
                <div class="col-lg-12 col-md-12 p-0">
                    <!-- <div class="login-content"> -->
                    <div class="login-content" style="height: unset;">
                        <div class="d-table">
                            <!-- <div class="d-table-cell"> -->
                                <div class="login-form">
                                    <!-- <form> -->
                                        <div class="form-group" style="margin-top:30px;">
                                            <input type="email" name="email" id="email" placeholder="อีเมล" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" id="password" placeholder="รหัสผ่าน" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" id="password" placeholder="ยืนยันรหัสผ่าน" class="form-control">
                                        </div>
                                        <button type="submit" class="btn btn-primary" style="width:100%;">สมัครสมาชิก</button>
                                    <!-- </form> -->
                                </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterForm'
    }
</script>