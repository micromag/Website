<template>
  <div class="font-sans">
    <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
      <Header />
    </div>

    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-teal-500 font-semibold tracking-wide uppercase" style ="color:#0E7452">
              {{ author.content.Name }}
            </span>
            <span class="mt-2 block text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {{ article.content.title }}
            </span>
          </h1>
          <img
            class="w-full rounded-lg mt-12"
            :src="article.content.image.filename"
            alt=""
            width="1310"
            height="873"
          />
        </div>
        <div class="mt-6 prose prose-teal prose-lg text-gray-500 mx-auto">
          <div v-html="$md.render(article.content.content)"></div>
        </div>
      </div>
    </div>
    <!-- Neswletter form -->
    <div class="bg-white" style="background-color:#A1C4B5">
      <div class="px-6 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 bg-teal-600 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div class="xl:w-0 xl:flex-1">
            <h2 class="text-2xl font-bold tracking-tight sm:text-3xl" style ="color:#0E7452">
              Sign up to get updates straight to your inbox
            </h2>
        
            <p class="max-w-3xl mt-3 text-lg leading-6 font-bold" style="color:#A42530; text-size: 20px;">
              Enter your email to be the first to know about the latest news
            </p>
          </div>
      
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">

            <!--<form class="md:flex" name="Newsletter" netlify action="https://formspree.io/f/moqrdzdn" method="POST">-->
            <form class="md:flex" name="Newsletter" netlify>
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
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app, route }) {
    // Get the slug from the route
    const slug = route.params.slug

    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: '*/' + slug,
      resolve_relations: 'author',
    })

    const article = res.data.stories[0]
    article.content.date = new Date(article.content.date)

    if (!article) return Error(`Article with slug ${slug} not found`)

    return { article, author: article.content.author }
  },
})
</script>
