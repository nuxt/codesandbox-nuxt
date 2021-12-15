<template>
  <div class="relative min-h-screen md:flex">
    <header
      class="bg-gray-800 text-gray-100 flex justify-between md:hidden w-full"
    >
      <NuxtLink to="/" class="block p-4 text-white font-bold">Logo</NuxtLink>

      <button
        @click="toggleMenu"
        class="p-4 focus:outline-none focus:bg-gray-700"
      >
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </header>
    <!-- Sadebar -->
    <aside
      class="bg-blue-800 text-blue-100 w-64 space-y-6 py-6 px-4 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out"
      :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="text-2xl font-extrabold">Logo</div>
      <nav>
        <a
          href=""
          class="block py-2 px-4 text-blue-300 rounded-lg transition duration-200 hover:bg-blue-700 hover:text-white"
          >Home</a
        >
        <p class="text-blue-200 font-bold my-3">Training:</p>
        <ul class="pl-3 border-l-2 border-indigo-100 text-blue-300">
          <li
            class="px-2 py-2 text-sm hover:bg-blue-700 hover:text-white rounded-lg transition-color duration-200"
          >
            Basic maneuver
          </li>
          <li
            class="px-2 py-2 text-sm hover:bg-blue-700 hover:text-white rounded-lg transition-color duration-200"
          >
            Gaunlet
          </li>
          <li
            class="px-2 py-2 text-sm hover:bg-blue-700 hover:text-white rounded-lg transition-color duration-200"
          >
            Neural Link 101
          </li>
        </ul>
      </nav>
    </aside>
    <main class="flex-1">
      <div class="flex flex-col mb-2 text-left px-4">
        <Nuxt />
      </div>
      <footer class="">Footer</footer>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
</style>