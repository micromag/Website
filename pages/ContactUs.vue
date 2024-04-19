<template>
    <div class="bg-gray-900 px-6 py-32 lg:px-8">
        <Header />
        <div class="mx-auto max-w-3xl text-base leading-7 text-white">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">Contact Us</h1>
            <p class="mt-6 text-xl leading-8">
                Have a question? Fill in the form below and we will aim to get back to you within 24 hours.
            </p>
            
            <div class="mt-10 max-w-2xl">
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
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