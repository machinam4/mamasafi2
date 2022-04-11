<template>
          <div class="pb-10">
            <p class="flex justify-center font-bold uppercase text-blue-500">
              {{ $store.state.cartItems.service.variation.name }}
            </p>
            <p class="flex justify-center text-sm text-gray-500">
              Maximum is {{ $store.state.cartItems.service.variation.maximum }}&nbsp;{{
                $store.state.cartItems.service.variation.unit_measure
              }}
            </p>
          </div>
          <div class="flex justify-between">
            <button
              type="button"
              @click="$store.commit('decreaseItemCount')"
              class="px-8 bg-blue-100 text-lg border border-transparent rounded-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              -
            </button>
            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
              <input
                type="number"
                v-model="$store.state.cartItems.units"
                name="count"
                class="text-center tx-bold mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <button
              type="button"
              @click="
                $store.commit('increaseItemCount', $store.state.cartItems.service.variation.maximum)
              "
              class="px-8 mr-0 bg-blue-100 text-lg border border-transparent rounded-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              +
            </button>
          </div>
          
</template>
<script setup>
</script>