<template>
  <div class="container py-4 px-3 mx-auto">
    <header class="pb-3">
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
                <router-link to="/why-we-exist" :class="$route.path.includes('exist') ? 'nav-link text-white nav-active' : 'nav-link text-white'">Why We Exist</router-link>
              </li>
              <li class="nav-item dropdown">
                <a  :class="($route.path.includes('works') || ($route.path.includes('communities'))) ? 'nav-link dropdown-toggle text-white nav-active' : 'nav-link dropdown-toggle text-white'" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  What We Do
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/how-it-works" :class="$route.path.includes('works') ? 'dropdown-item nav-active-dropdown' : 'dropdown-item'">How Galilee Works</router-link></li>
                  <li><router-link to="/galilee-in-communities" :class="$route.path.includes('communities') ? 'dropdown-item nav-active-dropdown' : 'dropdown-item'">Galilee in Communities</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/about-us" :class="$route.path.includes('about') ? 'nav-link text-white nav-active' : 'nav-link text-white'">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/support" :class="$route.path.includes('support') ? 'nav-link text-white nav-active' : 'nav-link text-white'">Support</router-link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </header>
  </div>
</template>
