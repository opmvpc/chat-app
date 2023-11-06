<script setup>
import NavLink from "./NavLink.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="">
    <div class="">
      <RouterLink class="" to="/">Mon site</RouterLink>

      <div class="">
        <ul class="">
          <NavLink url="/" text="Accueil" />
          <NavLink url="/chat" text="Chat" />
        </ul>
      </div>
    </div>
  </nav>
</template>
