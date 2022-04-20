<template>
    <div
          class="md:col-span-3 md:mr-4 h-96 overflow-auto"
          v-if="!detailsShow"
        >
          <div
            class="mt-1 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"
          >
            <div
              v-for="mamasafi in mamasafis"
              :key="mamasafi.id"
              class="group relative"
              @click="$store.commit('selectMamasafi', mamasafi)"
            >
              <div
                class="w-full group sm:h-50 min-h-50 bg-gray-200 group-hover:bg-gray-400 aspect-w-1 aspect-h-1 flex flex-col items-center md:py-2 rounded-md overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none"
              >
                <img
                  :src="mamasafi.imageSrc"
                  :alt="mamasafi.imageAlt"
                  class="w-full h-full md:rounded-full md:ring-2 md:ring-white object-center object-cover lg:w-16 lg:h-16"
                />
                <p class="mt-1 text-md group-hover:text-sm text-black">
                  {{ mamasafi.name }}
                </p>
                <button
                  @click="toggleDetails(mamasafi)"
                  class="mt-1 text-sm group-hover:text-blue-800 group-hover:underline text-black"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- agent details -->
        <div class="col-span-3 h-96 overflow-auto" v-if="detailsShow">
          <div class="block rounded-lg shadow-lg bg-white">
            <div
              class="overflow-hidden rounded-t-lg h-28"
              style="background-color: #3b82f6"
            >
              <div class="flex justify-right px-1 py-1">
                <button
                  type="button"
                  @click="detailsShow = !detailsShow"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-red-500 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-700"
                >
                  Close Details X
                </button>
              </div>
            </div>
            <div
              class="w-1/2 -mt-12 overflow-hidden border border-2 border-white rounded-md mx-auto bg-white"
            >
              <img
                :src="$store.state.cartItems.mamasafi.imageSrc"
                :alt="$store.state.cartItems.mamasafi.imageAlt"
              />
            </div>
            <div class="grid grid-cols-3 mt-2">
              <div class="border-r-2">
                <p class="flex items-start text-sm text-gray-500">Name</p>
                <p
                  class="flex items-start text-md font-semibold uppercase text-blue-500"
                  v-if="$store.state.cartItems.mamasafi"
                >
                  {{ $store.state.cartItems.mamasafi.name }}
                </p>
              </div>
              <div class="border-r-2 ml-2">
                <p class="flex items-start text-sm text-gray-500">
                  Years Experience
                </p>
                <p
                  class="flex items-start text-md font-semibold uppercase text-blue-500"
                  v-if="$store.state.cartItems.mamasafi"
                >
                  10
                </p>
              </div>
              <div class="ml-2">
                <p class="flex items-start text-sm text-gray-500">Jobs Done</p>
                <p
                  class="flex items-start text-md font-semibold uppercase text-blue-500"
                  v-if="$store.state.cartItems.mamasafi"
                >
                  10
                </p>
              </div>
            </div>
            <div>
              <hr />
              <p class="mt-4">
                {{ $store.state.cartItems.mamasafi.description }}
              </p>
            </div>
          </div>
        </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const mamasafis = [
  {
    id: 1,
    name: "Jacline",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Ba sic in black.",
    price: "$35",
    description:
      "Sylvia, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Evelyne",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Sarah",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Charity",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Catherine",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Joyce",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Deborah",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Esther",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Ann",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Alice",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Priscah",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
  {
    id: 1,
    name: "Priscillah",
    href: "#",
    imageSrc: "https://source.unsplash.com/random/?profile,female",
    imageAlt: "Front of men's Basic in black.",
    price: "$35",
    description:
      "Jacline, My Mamasafi got to my residence in less than 20 minutes. She cleaned and delivered more than I expected. Happy client. I shall be back.",
  },
];
const detailsShow = ref(false);
function toggleDetails(mamasafi) {
  detailsShow.value = !detailsShow.value;
  store.commit('selectMamasafi', mamasafi)
};



</script>