<script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const navbarHelper = ref(null);
  const toggleBtn = ref(null);
  const ddMenu = ref(null);


  watch(route, (newRoute, oldRoute) => {
    if (navbarHelper.value && toggleBtn.value) {
      if (navbarHelper.value.classList.length === 3) toggleBtn.value.click();
    }
    if (ddMenu.value) {
      ddMenu.value.classList.remove('show');
    }
  });
</script>

<template>
  <div class="container py-2 px-3 mx-auto">
    <header class="pb-1">
      <nav class="navbar navbar-expand-lg" style="background-image: none;">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand text-dark text-decoration-none">
            <img src="/src/assets/img/Galilee_logo_white_144.png" alt="Go to Galilee Logo" />
          </router-link>
          <button class="navbar-toggler" type="button" ref="toggleBtn" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarHelper">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/why-we-exist" :class="$route.path.includes('exist') ? 'nav-link text-white nav-active' : 'nav-link text-white'">Why We Exist</router-link>
              </li>
              <li class="nav-item dropdown">
                <a  :class="($route.path.includes('works') || ($route.path.includes('communities'))) ? 'nav-link text-white nav-active' : 'nav-link text-white'" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="me-2">What We Do</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </a>
                
                <ul class="dropdown-menu" ref="ddMenu">
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
