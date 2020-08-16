<template>
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Movie </label>
      <ul>
        <li><Nuxt-link to="/">Inicio</Nuxt-link></li>
        <li><Nuxt-link to="/add">Adicionar filme</Nuxt-link></li>
      </ul>
    </nav>
</template>