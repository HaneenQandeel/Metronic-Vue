<template>
  <div class="carsousel-card">
    <VueSlickCarousel v-bind="carouselSettings" ref="carousel">
       <div class="item-card">
        <div class="card-img">
          <img src="assets/pencil.jpg">
        </div>
        <div class="lines"></div>
        <h4 class="title">Pencils</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
             <div class="item-card" style="height:500px;">
        <div class="card-img">
          <img src="assets/pencil.jpg">
        </div>
        <div class="lines"></div>
        <h4 class="title">Pens</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
             <div class="item-card" style="height:500px;">
        <div class="card-img">
          <img src="assets/pencil.jpg">
        </div>
        <div class="lines"></div>
        <h4 class="title">Computers</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
             <div class="item-card" style="height:500px;">
        <div class="card-img">
          <img src="assets/pencil.jpg">
        </div>
        <div class="lines"></div>
        <h4 class="title">Laptops</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
      <div class="item-card" style="height:500px;">
        <div class="card-img">
          <img src="assets/pencil.jpg">
          <span class="discount">-30%</span>
        </div>
        <div class="lines"></div>
        <h4 class="title">Cars</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
            <div class="item-card" style="height:500px;">
        <div class="card-img">
          <img src="assets/pencil.jpg">
          <span class="discount">-30%</span>
        </div>
        <div class="lines"></div>
        <h4 class="title">Books</h4>
        <div class="list-unstyled">
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span class="checked">&#9734;</span>
          <span>0</span>
        </div>
        <p class="price">100$</p>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%; background-color:orange">
              <span class="sr-only">70%</span>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import VueSlickCarousel from 'vue-slick-carousel'
  export default {
    components: { VueSlickCarousel },
    data(){
    return{
      carouselSettings:{
        "dots": false,
        "focusOnSelect": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "swipeToSlide": true,
        "arrows": true,
         "dotsClass": "slick-dots custom-dot-class",
      }
    }

  },
   methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      showPrev() {
        this.$refs.carousel.prev()
      },
    }

  }
</script>

<style>
.checked{
  color:orange;
  font-size:30px;
}
span.discount{
  background-color:orange;
  width:50px;
  height:20px;
  color:#fff;
  border:1px solid #orange;
  float:left;
  border-radius:10%;
  margin-top:10px;
}
h4.title{
  color:#384AD7;
}
.card-img img{
  width: 135px;
  margin-left:40px;
  
}
.lines{
  border:1px solid #eee;
  margin: 15px;
}
</style>