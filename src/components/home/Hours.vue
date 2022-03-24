<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white backg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Working Hours</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Extensive working Hours</p>
      </div>

      <div class="mt-10 mx-auto ">
        <dl class="space-y-10 md:space-y-0 flex justify-center items-center">
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <ClockIcon class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Monday - Saturday</p>
            </dt>
            <dd class="mt-1 ml-16 text-base text-gray-500">
              7a.m - 6p.m
            </dd>
            
            <dt class="mt-10">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <ClockIcon class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Monday - Saturday</p>
            </dt>
            <dd class="mt-1 ml-16 text-base text-gray-500">
              7a.m - 6p.m
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {ClockIcon } from '@heroicons/vue/outline'

export default {
    components:{
        ClockIcon
    },
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