<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 to-purple-900"
  >
    <header>
      <Nav />
    </header>

    <main class="pt-36 w-full">
      <div class="w-full max-w-xl mx-auto px-4">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>
