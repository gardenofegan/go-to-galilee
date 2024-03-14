<script setup>

</script>

<template>
  <div class="container-fluid bg-support py-6 text-center">
    <p class="lead mb-4">Cultivate Prayer.  Sustain Mission.  Build Unity.</p>
  </div>
  <div class="px-4 py-5 text-left bg-white bg-white-image text-color-dark-night text-center">
    <div class="col-lg-8 py-5 mx-auto">
      <h3>Is the Holy Spirit calling you to partner with this Mission? Let's talk!</h3>
      <p>
        <router-link to="/support#contact-us" class="btn btn-bronze" role="button">Contact Us</router-link>
      </p>
    </div>
    <div class="col-lg-8 mx-auto">
      <p>
        God provides for Galilee through “partners in mission”, like you. It is our privilege to invite others to 
        join us in fulfilling our role in God's plan for His Church today. But this is also our duty. God has 
        specifically directed us to seek His providence through personal, intentional mission partnerships. 
      </p>
    </div>
  </div>
  <div class="px-4 py-5 text-left bg-cloud text-color-dark-night">
    <div class="col-lg-10 py-5 mx-auto">
      <div class="row">
        <div class="col-lg-6">
          <div class="col-lg-6 py-5 mx-auto text-center">
            <h4>Ready to start a partnership?</h4>
            <p>
              <a class="btn btn-bronze" href="#" target="_blank" role="button">Donate</a>
            </p>
          </div>
          <div class="col-lg-6 py-5 mx-auto text-center">
            <h4>Update your current partnership</h4>
            <p>
              <a class="btn btn-bronze" href="#" target="_blank" role="button">Donor Portal</a>
            </p>
          </div>
          <div class="col-lg-10 py-5 mx-auto text-center">
            <!-- <img src="/src/assets/img/Support_assets/" class="img-fluid"
            alt="discipleship strategy" style="width: 60px;" /> -->
            <p>
              101 S. Fountain Ave.<br/>
              Springfield, OH 45502
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col-lg-12 py-5">
            <h3>
              Galilee is a ministry of relationships.<br/> 
              The best way to explain it is to talk to us.
            </h3>
            <form class="mt-5" id="contact-us">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control form-bg-white" id="name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control form-bg-white" id="email" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="phone" class="form-control form-bg-white" id="phone" />
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea class="form-control form-bg-white" id="note" rows="3"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-bronze btn-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>