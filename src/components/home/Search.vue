<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="container flex mx-auto justify-center md:relative">
    <div
      class="
        md:absolute lg:absolute
        bg-cyan-500
        md:opacity-90
        z-10
        md:w-4/5 md:rounded-lg lg:-bottom-24
      "
    >
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-0
          sm:px-6
          lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
        "
      >
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-4xl
            md:visible
            sm:invisible
          "
        >
          <span class="block">Need Some Cleaning?</span>
          <!-- <span class="block text-indigo-600"
            >Start your free trial today.</span
          > -->
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="rounded-full shadow inline-block">
            <router-link
              :to="{ name: 'Book' }"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-full
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                md:py-4 md:text-lg md:px-10
              "
            ><span><SearchIcon class="h-10 w-10 mr-2" aria-hidden="true" /></span>
               <h2 class="text-3xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-4xl
            md:visible
            sm:invisible block text-white"
            ><router-link :to="{name: 'ServiceSelect'}">Select Service Now</router-link></h2
          >
              
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SearchIcon } from "@heroicons/vue/outline";

export default {
    components:{
        SearchIcon
    }
}
</script>