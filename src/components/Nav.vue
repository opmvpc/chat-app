<script setup>
import NavLink from "./NavLink.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="fixed w-full p-4">
    <nav
      class="max-w-xl mx-auto px-4 py-4 flex bg-violet-400/50 backdrop-blur-md justify-between h-20 shadow-md items-center text-violet-100/75 rounded-lg ring-2 ring-violet-200/50"
    >
      <div>
        <RouterLink class="font-bold text-2xl font-serif" to="/"
          >Mon site</RouterLink
        >
      </div>

      <ul class="flex space-x-6 text-xl font-bold">
        <NavLink url="/" text="Accueil" />
        <NavLink url="/chat" text="Chat" />
      </ul>
    </nav>
  </div>
</template>
