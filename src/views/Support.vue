<script setup>

</script>

<template>
  <div class="container-fluid bg-helper text-center">
    <div class="div-helper"><p class="lead">Cultivate Prayer.  Sustain Mission.  Build Unity.</p></div>
    <img src="/src/assets/img/Support_assets/Support_header_1920.jpg" alt="Support" class="bg-img" />
  </div>
  <div class="px-4 py-5 text-left bg-white bg-white-image text-color-dark-night text-center">
    <div class="col-lg-8 py-5 mx-auto">
      <h3>Is the Holy Spirit calling you to partner with this mission? Let's talk!</h3>
      <p>
        <router-link to="/support#contact-us" class="btn btn-bronze" role="button">Contact Us</router-link>
      </p>
    </div>
    <div class="col-lg-8 mx-auto text-left">
      <p>
        God provides for Galilee through “partners in mission,” like you. It is our privilege to invite others to 
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
            <p class="pt-3">
              <a class="btn btn-bronze" href="https://donorbox.org/galilee-mission-partners" target="_blank" role="button">Donate</a>
            </p>
          </div>
          <div class="col-lg-6 py-5 mx-auto text-center">
            <h4>Update your current partnership.</h4>
            <p class="pt-3">
              <a class="btn btn-bronze" href="https://donorbox.org/user_session/new" target="_blank" role="button">Donor Portal</a>
            </p>
          </div>
          <div class="col-lg-10 py-5 mx-auto text-center">
            <img src="/src/assets/img/Support_assets/email_icon.png" class="img-fluid"
            alt="discipleship strategy" style="width: 26px;" />
            <p class="pt-3">
              101 S. Fountain Ave.<br/>
              Springfield, OH 45502
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col-lg-12 py-5">
            <h3>
             Reach out to talk to us personally about this mission.
            </h3>
            <form class="mt-5" id="contact-us" action="https://fabform.io/f/mYX__sa" method="post">
              <div class="mb-3">
                <label for="name" class="form-label">Name<sup class="text-danger">*</sup></label>
                <input type="text" name="name" class="form-control form-bg-white" id="name" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email<sup class="text-danger">*</sup></label>
                <input type="email" name="email" class="form-control form-bg-white" id="email" required />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="phone" name="phone" class="form-control form-bg-white" id="phone" />
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Note<sup class="text-danger">*</sup></label>
                <textarea class="form-control form-bg-white" name="note" id="note" rows="3" required></textarea>
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