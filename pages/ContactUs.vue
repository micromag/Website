<template>
    <div class="bg-gray-900 px-6 py-32 lg:px-8">
        <Header />
        <div class="mx-auto max-w-3xl text-base leading-7 text-white">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">Contact Us</h1>
            <p class="mt-6 text-xl leading-8">
                Have a question? Fill in the form below and we will aim to get back to you within 24 hours.
            </p>
            
            <div class="mt-10 max-w-2xl">
                <!--<form class="mx-auto mt-16 max-w-xl sm:mt-20" name="Contact" method="POST" netlify>
                    <input type="hidden" name="form-name" value="Contact" />
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-white">
                                First name
                            </label>
                            <div class="mt-2.5">
                                <input 
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" 
                                    id="first-name"
                                    name="first-name" 
                                    type="text" 
                                    autocomplete="text"
                                    required 
                                />
                            </div>
                        </div>
        
                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-white">
                                Last name
                            </label>
                            <div class="mt-2.5">
                                <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                                    id="last-name"
                                    name="last-name" 
                                    type="text" 
                                    autocomplete="text"
                                    required  
                                />
                            </div>
                        </div>
        
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-white">
                                Email
                            </label>
                            <div class="mt-2.5">
                                <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" 
                                    id="emailaddress" 
                                    name="emailaddress"
                                    type="email"
                                    autocomplete="email" 
                                    required 
                                />
                            </div>
                        </div>
        
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-white">
                                Message
                            </label>
                            <div class="mt-2.5">
                                <textarea class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                                    name="message" 
                                    id="message" 
                                    rows="4"
                                    required 
                                 />
                            </div>
                        </div>
      
                        <div class="mt-10">
                            <button type="submit" class="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                                Let's talk
                            </button>
                        </div>
                    </div>
                </form> -->
                <form class="md:flex" name="Newsletter" method="POST" netlify>
              <input type="hidden" name="form-name" value="Newsletter" />
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="text"
                required
                class="w-full px-5 py-3 mr-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                placeholder="Enter your name"
              />
              <label for="emailAddress" class="sr-only">Email address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autocomplete="email"
                required
                class="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black border border-transparent rounded-md shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                style ="background-color:#76B82A; color:#0E7452; font-weight: bold; font-size: 22px"
              >
                Sign up
              </button>
            </form>
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