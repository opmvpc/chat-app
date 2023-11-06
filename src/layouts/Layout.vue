<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="">
    <header>
      <Nav />
    </header>

    <main class="">
      <div class="">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>
