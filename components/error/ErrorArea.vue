<template>
    <div class="error-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-content">
                        <img src="../../assets/images/404.png" alt="error">
    
                        <h3>Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    
                        <router-link to="/" class="btn btn-primary">Go to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ErrorArea'
    }
</script>