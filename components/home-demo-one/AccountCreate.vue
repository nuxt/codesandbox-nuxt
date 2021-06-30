<template>
    <div class="account-create-area">
        <div class="container">
            <div class="account-create-content">
                <!-- <h2 style="max-width: none;">ลงทะเบียนเพื่อรับข่าวสารจาก iSmartPay</h2> -->
                <h2 style="max-width: none;">ลงทะเบียนเพื่อรับข่าวสารจาก <span class="logo-font-cu">iSmartPay</span></h2>
                <input type="text" name="email" id="email" required="required" placeholder="อีเมล" class="form-control col-sm-6 offset-sm-3" style="margin-top:15px;">
                <a href="#" class="btn btn-primary">ติดตาม</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AccountCreate'
    }
</script>