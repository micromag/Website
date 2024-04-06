<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <Header />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4">
            <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <!-- Magazine Cover Image -->
              <img class="aspect-[14/13] w-full rounded-2xl object-cover" src="/Issue6.png" alt="Issue 6 Cover image" />
              <div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
              </div>
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> Issue 6 - Build a Robot </h1>
              <p class="text-base font-semibold leading-7 text-white"> November 2019 </p>
              <div class="max-w-xl">
                <p class="mt-6 text-blue-400 font-bold"> Build a Robot </p>
                <p class="mt-6 text-white">This issue’s cover feature is “Build your own DIY Low Cost Robot”. One of the most 
                  common projects people build with the micro:bit is a robot. The micro:bit makes this super simple both on the 
                  hardware and software side of things. The majority go out and purchase a prebuilt robot that makes it super easy 
                  to get started with robotics and the micro:bit. However, most of the time, this can set you back £40+. For this 
                  special issue, we set Creative Technologist and regular micro:mag contributor Les Pounder the challenge of 
                  building the ultimate low-cost micro:bit powered robot that anyone can build, with just a few parts.</p>
                <p class="mt-8 text-blue-400 font-bold">Plus!</p>
                <p class="mt-6 text-white">
                    <ul>
                        <li> 4tronix’s new motor drive board </li>
                        <li> Girls into coding Robot Showdown </li>
                        <li> Running workshops in fields </li>
                        <li> 3D printed Servo Magic 8 Ball </li>
                        <li> And more! </li>
                    </ul>
                </p>
              </div>
            </div>
            <div class="mt-10 flex">
                <a href="https://drive.google.com/file/d/1Qqw9-X2t5-0hoPydVbD3WmS88bFYfYb_/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> Download PDF </a>
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