<script setup>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const boxOne = ref(null)
const boxOneIsVisible = ref(false)

const boxTwo = ref(null)
const boxTwoIsVisible = ref(false)

const boxThree = ref(null)
const boxThreeIsVisible = ref(false)

const boxFour = ref(null)
const boxFourIsVisible = ref(false)

function onBoxOneVisibility(state) {
  boxOneIsVisible.value = state
}

function onBoxTwoVisibility(state) {
  boxTwoIsVisible.value = state
}

function onBoxThreeVisibility(state) {
  boxThreeIsVisible.value = state
}

function onBoxFourVisibility(state) {
  boxFourIsVisible.value = state
}

</script>

<template>
  <div class="container-fluid bg-helper text-center">
    <div class="div-helper"><p class="lead">Galilee was born out of a longing for true, deep prayer.</p></div>
    <img src="/src/assets/img/Why_assets/why_header_1920.png" alt="Support" class="bg-img" />
  </div>
  <div class="px-4 py-5 text-left bg-white bg-why-we-exist-white-image text-color-dark-night">
    <div class="col-lg-8 py-5 mx-auto">
      <p class="pt-5">
        Galilee exists in response to the Lord's call to return to Him, the true source of life-giving water.
        We are often left with a longing for more in our attempts to be on mission. We envision a culture of
        ministry where every servant of God is able to draw from the life-giving stream of prayer.
      </p>
      <h3 class="pb-5">
        To build up this culture of prayer, Galilee helps each person walk through the journey of prayer accompanied.
      </h3>
    </div>
  </div>
  <div class="px-4 py-5 text-left bg-cloud-lite text-color-dark-night">
    <div class="col-lg-6 py-5 mx-auto">
      <p class="fst-italic">
        For my people have committed two evils: they have forsaken me, the fountain of living
        waters, and hewed out cisterns for themselves, broken cisterns that hold no water.
      </p>
      <h4>
        — Jeremiah 2:13
      </h4>
    </div>
  </div>
  <!-- <div class="px-4 py-5 text-left bg-cloud text-color-dark-night">
    <div class="col-lg-8 mx-auto">
      <h3>Practicing Prayer with Galilee can bear fruit in many ways.</h3>
      <div class="py-5 big-box box-1" ref="boxOne"  v-element-visibility="onBoxOneVisibility">
        <div :class="boxOneIsVisible ? 'stickme col-lg-10 mx-auto py-5' : 'col-lg-10 mx-auto py-5'">
          <div class="row">
            <div class="col-lg-3">
              <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_sanctifies.png" class="img-fluid"
                alt="Sanctifies" />
            </div>
            <div class="col-lg-9">
              <h4>Sanctifies</h4>
              <p>
                Every Galilee reveals how God is walking with you,
                helps you listen for His invitations, and prepares 
                you for your next “yes”!
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="py-5 big-box box-2" ref="boxTwo" v-element-visibility="onBoxTwoVisibility">
        <div :class="boxTwoIsVisible ? 'stickme col-lg-10 mx-auto py-5' : 'col-lg-10 mx-auto py-5'">
          <div class="row">
            <div class="col-lg-3">
              <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_connects.png" class="img-fluid"
                alt="Connects" />
            </div>
            <div class="col-lg-9">
              <h4>Connects</h4>
              <p>
                No one is meant to journey alone! Galilee establishes and strengthens communal connections.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="py-5 big-box box-3" ref="boxThree" v-element-visibility="onBoxThreeVisibility">
        <div :class="boxThreeIsVisible ? 'stickme col-lg-10 mx-auto py-5' : 'col-lg-10 mx-auto py-5'">
          <div class="row">
            <div class="col-lg-3">
              <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_unites.png" class="img-fluid"
                alt="Unites" />
            </div>
            <div class="col-lg-9">
              <h4>Unites</h4>
              <p>
                We are all one body. Galilee enables us to honor what God is doing in one another and encourages a spirit of peace and collaboration
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="py-5 big-box box-4" ref="boxFour" v-element-visibility="onBoxFourVisibility">
        <div :class="boxFourIsVisible ? 'stickme col-lg-10 mx-auto py-5' : 'col-lg-10 mx-auto py-5'">
          <div class="row">
            <div class="col-lg-3">
              <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_solidifies.png" class="img-fluid"
                alt="Solidifies" />
            </div>
            <div class="col-lg-9">
              <h4>Solidifies</h4>
              <p>
                We build our identity on Christ, the Rock. Galilee brings to light what Jesus wants for us in our communities, so we can become who He wants us to be.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
-->
  <div class="px-4 py-5 text-left bg-cloud bg-why-we-exist-gray-image text-color-dark-night">
    <div class="col-lg-8 mx-auto pb-5">
      <h3 class="pb-5">Practicing Prayer with Galilee:</h3>
      <div class="row gx-5 pb-5">
        <div class="col-lg-3 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_sanctifies.png" class="img-fluid"
            alt="Sanctifies" style="width: 75px;" />
          <h4 class="pt-3 text-center text-md-start">Sanctifies</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            Every Galilee reveals how God is walking with you,
            helps you listen for His invitations, and prepares 
            you for your next “yes”!
          </p>
        </div>
        <div class="col-lg-3 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_connects.png" class="img-fluid"
            alt="Connects" style="width: 75px;" />
          <h4 class="pt-3 text-center text-md-start">Connects</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            No one is meant to journey alone! Galilee establishes and strengthens communal connections.
          </p>
        </div>
        <div class="col-lg-3 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_solidifies.png" class="img-fluid"
            alt="Unites" style="width: 75px;" />
          <h4 class="pt-3 text-center text-md-start">Unites</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            We are all one body. Galilee enables us to honor what God is doing in one another and encourages a spirit of peace and collaboration.
          </p>
        </div>
        <div class="col-lg-3 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/Fruits logo icons/pngs/why_unites.png" class="img-fluid"
            alt="Solidifies" style="width: 75px;" />
          <h4 class="pt-3 text-center text-md-start">Solidifies</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            We build our identity on Christ, the Rock. Galilee brings to light what Jesus wants for us in our communities, so we can become who He wants us to be.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-5 text-left bg-white text-color-dark-night">
    <div class="col-lg-8 py-5 mx-auto">
      <h3 class="pb-5">
        Prayer is the food which increases our hunger for God.<br/>
        How can Galilee help you in your journey?
      </h3>
      <div class="row">
        <div class="col-lg-6 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/icon_TryGalilee_60px.svg" class="img-fluid"
            alt="Sanctifies" style="width: 60px;" />
          <h4 class="py-3 text-center text-md-start">Try Galilee with a friend.</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            <router-link to="/how-it-works" class="btn btn-bronze" role="button">How it Works</router-link>
          </p>
        </div>
        <div class="col-lg-6 text-center text-md-start">
          <img src="/src/assets/img/Why_assets/icon_Community_60px.svg" class="img-fluid"
            alt="discipleship strategy" style="width: 60px;" />
          <h4 class="py-3 text-center text-md-start">See how Galilee can fit into<br/>your discipleship strategy.</h4>
          <p class="text-center text-md-start mb-5 mb-lg-0">
            <router-link to="/galilee-in-communities" class="btn btn-bronze" role="button">Learn More</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-5 text-left bg-cloud text-color-dark-night text-center">
    <div class="col-lg-6 py-5 mx-auto">
      <h3>Want to hear more about our vision for the Church?</h3>
      <p class="pt-3">
        <router-link to="/support" class="btn btn-bronze" href="#" role="button">Contact Us</router-link>
      </p>
    </div>
  </div>
</template>