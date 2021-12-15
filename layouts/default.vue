<template>
  <div class="bg-gray-100">
    <header class="bg-blue-900 text-gray-100 h-32">
      <div
        class="flex justify-between items-center pt-3 px-4 max-w-6xl mx-auto h-16"
      >
        <NuxtLink to="/" class="block p-2 text-white font-bold text-3xl"
          >Logo</NuxtLink
        >

        <button
          @click="toggleMenu"
          class="p-2 rounded-full focus:outline-none focus:bg-blue-800 md:hidden"
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
        <NuxtLink
          v-if="!loggedIn"
          to="/login"
          class="text-sm px-2 py-1 space-x-2 border border-blue-100 rounded hidden md:flex hover:bg-blue-800 transform transition-color duration-300"
        >
          <span>Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
        <button
          v-else
          class="text-sm px-2 py-1 space-x-2 border border-red-100 rounded hidden md:flex hover:bg-blue-800 transform transition-color duration-300"
        >
          <span>Admin</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
    <!-- Sadebar -->
    <aside
      class="bg-blue-900 text-blue-100 w-64 space-y-6 py-6 px-4 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out md:hidden"
      :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="text-2xl font-extrabold">Logo</div>
      <nav>
        <NuxtLink
          to="/"
          class="block py-2 px-4 text-blue-300 rounded-lg transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Home
        </NuxtLink>
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
    <main
      class="max-w-6xl mx-auto bg-white shadow-md rounded-lg -mt-8 px-4 py-6"
    >
      <div class="flex gap-6">
        <div class="w-64 px-2 py-6 hidden md:block border-r border-gray-200">
          <nav>
            <p class="text-gray-600 font-bold my-3">Training:</p>
            <ul class="pl-3 border-l-2 border-indigo-100 text-gray-800">
              <li
                class="px-2 py-1 text-sm hover:bg-gray-200 hover:text-gray-700 rounded-lg transition-color duration-200"
              >
                Basic maneuver
              </li>
              <li
                class="px-2 py-1 text-sm hover:bg-gray-200 hover:text-gray-700 rounded-lg transition-color duration-200"
              >
                Gaunlet
              </li>
              <li
                class="px-2 py-1 text-sm hover:bg-gray-200 hover:text-gray-700 rounded-lg transition-color duration-200"
              >
                Neural Link 101
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex-1 px-2 py-6">
          <Nuxt class="min-h-full" />
        </div>
      </div>
    </main>
    <Footer class="mt-12" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      loggedIn: false,
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