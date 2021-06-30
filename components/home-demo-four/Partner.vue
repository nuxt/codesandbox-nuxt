<template>
    <div class="partner-area-two ptb-70">
        <div class="container">
            <div class="partner-slider owl-carousel owl-theme">
                <carousel
                    :autplay = "true"
                    :loop = "true"
                    :paginationEnabled = "false"
                    :autoplaySpeed = "true"
                    :autoplayTimeout = "500"
                    :perPageCustom = "[[0, 1], [576, 1], [768, 3], [1024, 4], [1200, 5]]"
                >
                    <slide v-for="item in carouselItems" :key="item.id">
                        <div class="single-partner-item">
                            <img :src="item.image" alt="image">
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import image1 from '../../assets/images/partner1.png'
import image2 from '../../assets/images/partner2.png'
import image3 from '../../assets/images/partner3.png'
import image4 from '../../assets/images/partner4.png'
import image5 from '../../assets/images/partner5.png'
import image6 from '../../assets/images/partner1.png'
import image7 from '../../assets/images/partner2.png'
import image8 from '../../assets/images/partner3.png'
import image9 from '../../assets/images/partner4.png'
import image10 from '../../assets/images/partner5.png'

export default {
    name: 'Partner',
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            carouselItems: [
                {
                    id: 1,
                    image: image1,
                },
                {
                    id: 2,
                    image: image2,
                },
                {
                    id: 3,
                    image: image3,
                },
                {
                    id: 4,
                    image: image4,
                },
                {
                    id: 5,
                    image: image5,
                },
                {
                    id: 6,
                    image: image6,
                },
                {
                    id: 7,
                    image: image7,
                },
                {
                    id: 8,
                    image: image8,
                },
                {
                    id: 9,
                    image: image9,
                },
                {
                    id: 10,
                    image: image10,
                },
            ]
        }
    }
}
</script>