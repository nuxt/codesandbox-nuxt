<template>
    <div class="main-banner-section">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-content">
                                <h1>Easy, fee-free banking for entrepreneurs</h1>
                                <p>Get the financial tools and insights to start, build, and grow your business.</p>
                                <a href="#" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="money-transfer-form">
                                <form>
                                    <div class="form-group">
                                        <label>You Send</label>
                                        <div class="money-transfer-field">
                                            <input type="text" class="form-control" autocomplete="off" value="1,000">

                                            <div class="amount-currency-select">
                                                <select>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>GBP</option>
                                                    <option>BRL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="currency-info">
                                        <div class="bar"></div>
                                        <span><strong>62.3</strong> Exchange Rate</span>
                                        <span><strong>$4.50</strong> Transition Fees</span>
                                    </div>

                                    <div class="form-group">
                                        <label>Recipient gets</label>
                                        <div class="money-transfer-field">
                                            <input type="text" class="form-control" autocomplete="off" value="1,000">

                                            <div class="amount-currency-select">
                                                <select>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>GBP</option>
                                                    <option>BRL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="money-transfer-info">
                                        <span>You could save vs banks <strong>1,010.32 USD</strong></span>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Get Started</button>

                                    <div class="terms-info">
                                        <p>By clicking continue, I am agree with <router-link to="/terms-condition">Terms & Policy</router-link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainBanner'
    }
</script>