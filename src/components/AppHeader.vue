<template>
  <div class="container py-4 px-3 mx-auto">
    <header class="pb-3 mb-5">
      <nav class="navbar navbar-expand-lg d-flex justify-content-between align-items-md-center" style="background-image: none;">
        <h1 class="h4">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <img src="/src/assets/img/Galilee_logo_white_144.png" alt="Go to Galilee Logo" />
          </a>
        </h1>
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/why-we-exist" class="nav-link text-white">Why We Exist</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What We Do
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/how-it-works" class="dropdown-item">How Galilee Works</router-link></li>
                  <li><a class="dropdown-item" href="#">Galilee in Communities</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </header>
  </div>
</template>
