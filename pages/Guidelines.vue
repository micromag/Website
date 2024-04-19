<template>
    <div class="bg-gray-900 px-6 py-32 lg:px-8">
        <Header />
        <div class="mx-auto max-w-3xl text-base leading-7 text-white">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">Guidelines</h1>
            <p class="mt-6 text-xl leading-8">
                We've got some simple guidelines to follow when writing an article for micro:mag. Please read them below 
                <b>before you start writing.</b>
            </p>
            
            <div class="mt-10 max-w-2xl">
                <ul role="list" class="mt-8 max-w-xl space-y-8 text-blue-400">
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Keep your article micro:bit related.
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Your article should be at least 500 words and whilst we don't have a maximum word count, keep your 
                            article as concise as possible. If you don't think you can keep it within a concise word count, it 
                            might work best as a series of articles.
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Your article must be exported as .txt or a MarkDown file. You should be able to export your article 
                            from any popular word processing software in one of these file types.
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            We'll need the main text of your article, a short bio and a profile picture within your submission.
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor" class="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Images must comply with copyright laws. If the image is your own or you have permission from the person 
                            who the image belongs too, you can submit it. However, make sure to credit the owner.
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Each image must be clearly marked within the main body of your article like this example:
                            <strong class="font-semibold text-blue-400">
                                MICROBIT_IMAGE.PNG (An image of a micro:bit. Credit: Joshua Lowe)
                            </strong>
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="text-white"> 
                            Image files and other assets must be submitted as a .zip file.
                        </span>
                    </li>
                </ul>
                <p class="mt-8">
                    If you have any questions about the above, please contact us using the contact page.
                </p>
            </div>
        </div>
        <Footer />
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