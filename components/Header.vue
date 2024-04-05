<template>
  <div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">micro:mag</span>
          <img class="h-8 w-auto" src="@/static/Logo.png" alt="Logo">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink to ="/Magazines" class="text-md font-semibold leading-6 text-white">
            Magazines
        </NuxtLink>
        <!--<NuxtLink to ="/Blog" class="text-md font-semibold leading-6 text-gray-900">
            Blog
        </NuxtLink> -->
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!--<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>-->
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <NuxtLink to="/">
                  <img class="h-8 w-auto sm:h-10" src="@/static/Logo.png" alt="Logo">
                </NuxtLink>
                <div class="-mr-2">
                  <button type="button" @click="isOpen = !isOpen" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Open menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  
                  <transition
                    enter-active-class="duration-200 ease-out"
                    enter-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                      <div class="rounded-md bg-white shadow-xs">
                        <div class="mt-6">
                          <nav class="grid gap-y-8">
        
                            <NuxtLink to="/Issues" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Back Issues
                            </NuxtLink>
                            <!--<NuxtLink to="/Blog" class="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 p-3">
                              Blog
                            </NuxtLink> -->
                          </nav>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
  </header>
  </div> 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data: () => ({
    isOpen: false,
})
});
</script>