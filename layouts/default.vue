<template>
  <div class="p-8">
    <div class="flex items-center mb-2">
      <NuxtLink to="/" class="p-2" active-class="text-green-500">/</NuxtLink>
      <NuxtLink to="/colors/green" class="p-2" active-class="text-green-500">/about/green</NuxtLink>
      <NuxtLink to="/colors/yellow" class="p-2" active-class="text-green-500">/about/yellow</NuxtLink>
      <NuxtLink to="/colors/purple" class="p-2" active-class="text-green-500">/about/purple</NuxtLink>
    </div>

    <slot />
  </div>
</template>