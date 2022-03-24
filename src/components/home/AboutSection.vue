<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 md:pt-28 backg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="uppercase text-base text-indigo-600 font-semibold tracking-wide uppercase">About</h2>
        <p class="uppercase mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
        <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          Mamasafi is an online platform that links households with the best qualified and vetted cleaning pros, offering affordable, quality and safe home cleaning services in their locality.
          The cleaning pros are popularly known as 'Mamasafi' or 'Mamafua' which are Swahili words used to refer to a freelance Laundry service providing woman in Kenya.
          Our mission is to 'Deliver clean spaces and happy homes' as well as empower our Mamasafi.
          <router-link :to="{name: 'About'}" class="text-indigo-600 underline">Read more</router-link>
          </p>
          <div class="rounded-md shadow flex
                      items-center
                      justify-center">
                  <router-link
                    :to="{name: 'Book'}"
                    class="
                      w-1/2
                      flex
                      items-center
                      justify-center
                      px-8
                      py-3
                      mt-2
                      text-base
                      font-medium
                      rounded-md
                      text-white
                      bg-indigo-600
                      hover:bg-indigo-700
                    "
                  >
                    How it Works
                  </router-link>
                </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    return {
    }
  },
}
</script>

<style scoped>
.backg{
   background-color: #e7f0f4;
background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%237ddae1' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>