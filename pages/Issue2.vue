<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <Header />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4">
            <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <!-- Magazine Cover Image -->
              <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="/Issue2.png" alt="Issue 2 Cover image" />
              <div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
              </div>
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> Issue 2 - Scratch for micro:bit </h1>
              <p class="text-base font-semibold leading-7 text-white"> October 2018 </p>
              <div class="max-w-xl">
                <p class="mt-6 text-blue-400 font-bold"> Scratch + micro:bit </p>
                <p class="mt-6 text-white">This issues Cover feature is all about Scratch 3.0 and it’s new micro:bit blocks. We’ve got all sorts of things 
                  for you in the new and exciting cover feature. Michael Rimicans teaches us the basics of Scratch 3 and micro:bit and Eileen King shows us 
                  how to make our own Scratch games controller, these are just some of the articles to enjoy in this issues cover feature.</p>
                <p class="mt-8 text-blue-400 font-bold">Plus!</p>
                <p class="mt-6 text-white">
                    <ul>
                        <li> Countdown Timer </li>
                        <li> Micro:bit & Kodu </li>
                        <li> Reviews </li>
                        <li> Hack:Bit 2018 </li>
                        <li> And more! </li>
                    </ul>
                </p>
              </div>
            </div>
            <div class="mt-10 flex">
                <a href="https://drive.google.com/file/d/17xbnenefVD21bNRX3b8bIww4w99Gn2d3/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> Download PDF </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default Vue.extend({
    
    components: {
      Header,
      Footer
    }
  });
</script>