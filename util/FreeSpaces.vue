<template>
    <text style="font-weight: 500;font-variant-numeric: proportional-nums;font-size: 15px;color: rgb(51, 51, 51);" width="36px" x="19" y="45" text-anchor="middle">
        {{free}}
    </text>
</template>

<script>
    export default {
        name: "FreeSpaces",
        props: {
            free: {
                type: Number,
                required: true
            }
        }
    }
</script>