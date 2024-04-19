<template>
    <div class="bg-gray-900 px-6 py-32 lg:px-8">
        <Header />
        <div class="mx-auto max-w-3xl text-base leading-7 text-white">
            <h1 class="mt-2 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl">Submissions Form</h1>
            <form name="Submissions" enctype="multipart/form-data" data-netlify="true">
                <div class="space-y-12">

                    <!--Profile Info-->
                    <div class="border-b border-white/10 pb-12">
                        <h2 class="mt-10 text-2xl text-base font-semibold leading-7 text-blue-400 sm:text-3xl">
                            Profile
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-white">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium leading-6 text-white">
                                    Username
                                </label>
                                <div class="mt-2">
                                    <div class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                        <input type="text" name="username" id="username" autocomplete="username" class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6" placeholder="username" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="about" class="block text-sm font-medium leading-6 text-white">
                                    About
                                </label>
                                <div class="mt-2">
                                    <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <p class="mt-3 text-sm leading-6 text-white">
                                    Write a few sentences about yourself.
                                </p>
                            </div>

                            <div class="col-span-full">
                                <label for="profile-photo" class="block text-sm font-medium leading-6 text-white">
                                    Profile photo
                                </label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <div class="mt-4 flex text-sm leading-6 text-gray-400">
                                            <label for="photo-upload" class="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="photo-upload" name="photo-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 8MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Personal Info-->
                    <div class="border-b border-white/10 pb-12">
                        <h2 class="text-2xl text-base font-semibold leading-7 text-blue-400 sm:text-3xl">
                            Personal Information
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-white">
                            Use a permanent address where you can receive mail. This will be used for the micro:mag team to get in 
                            touch about your article.
                        </p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-white">
                                    First name
                                </label>
                                <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium leading-6 text-white">
                                    Last name
                                </label>
                                <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="email" class="block text-sm font-medium leading-6 text-white">
                                    Email address
                                </label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Article Information -->
                    <div class="border-b border-white/10 pb-12">
                        <h2 class="text-2xl text-base font-semibold leading-7 text-blue-400 sm:text-3xl">
                            Article Information
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-white">
                            Here we will ask for all the information required for us to publish your article.
                        </p>

                        <div class="mt-10 space-y-10">
                            <div class="sm:col-span-4">
                                <label for="article-name" class="block text-sm font-medium leading-6 text-white">
                                    Article Name
                                </label>
                                <div class="mt-2">
                                    <div class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                        <input type="text" name="article-name" id="article-name" autocomplete="articlename" class="flex-1 border-0 bg-white py-1.5 pl-1 text-grey-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Here is an awesome micro:bit project" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="article-type" class="block text-sm font-medium leading-6 text-white">
                                    Article Type
                                </label>
                                <select id="article-type" name="article-type" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>News</option>
                                    <option selected="">Make</option>
                                    <option>Review</option>
                                </select>
                            </div>

                            <div class="col-span-full">
                                <label for="description" class="block text-sm font-medium leading-6 text-white">
                                    Article Description
                                </label>
                                <div class="mt-2">
                                    <textarea id="description" name="description" rows="3" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                                </div>
                                <p class="mt-3 text-sm leading-6 text-white">
                                    Write a few sentences about your article. This will be displayed on the article card.
                                </p>
                            </div>

                            <div class="col-span-full">
                                <label for="cover-image" class="block text-sm font-medium leading-6 text-white">
                                    Cover Image
                                </label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>

                                        <div class="mt-4 flex text-sm leading-6 text-gray-400">
                                            <label for="cover-upload" class="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="cover-upload" name="cover-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 8MB</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="article-upload" class="block text-sm font-medium leading-6 text-white">
                                    Article Upload
                                </label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>

                                        <div class="mt-4 flex text-sm leading-6 text-gray-400">
                                            <label for="article-upload" class="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="article-upload" name="article-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-400">TXT, MD up to 8MB</p>
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="article-assets" class="block text-sm font-medium leading-6 text-white">
                                  Link to images  
                                </label>
                                <div class="mt-2">
                                    <div class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                        <input type="text" name="article-assets" id="article-assets" autocomplete="articleassets" class="flex-1 border-0 bg-white py-1.5 pl-1 text-grey-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="paste link to images" />
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-white">
                                    Link to Google drive or similar service containing the images for your article.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Submit</button>
                </div>
            </form>
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