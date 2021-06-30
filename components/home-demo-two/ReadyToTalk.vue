<template>
    <div class="ready-to-talk">
        <div class="container">
            <div class="ready-to-talk-content">
                <h3>Ready to talk?</h3>
                <p>Our team is here to answer your question about Vibion</p>
                <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
                <span><a href="#">Or, get started now with a free trial</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ReadyToTalk'
    }
</script>