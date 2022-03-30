<template>
  <div class="max-w-2xl mx-auto py-5 px-4 sm:py* sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="text-center">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Mamasafi Cleaning Services
      </h2>
      <p>
        We offer a variety of home and cleaning services, all are performed by a
        professional team.
      </p>
    </div>
    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-x-8"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="group relative"
        v-on:click="isOpenValue = true"
      >
        <div
          class="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-lg font-extrabold text-white">
              <button @click="toggleModal(product)">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </button>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <Modal :isOpenValue="isOpenValue" v-if="serviceShow">
      <template #modal_title>
        {{ modal_data.name }}
      </template>
      <template #modal_content>
        <p
          class="text-sm text-gray-500 flex"
          v-for="service in modal_data.to"
          :key="service.name"
        >
          <button
            @click="goToNext(service)"
            class="hover:border hover:border-blue-500 active:bg-blue-600 px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-radial transition-all duration-500"
            type="button"
          >
            <div class="grid grid-cols-3 gaps-4 flex justify-center">
              <div>
                <p class="flex items-start font-bold uppercase text-blue-500">
                  {{ service.name }}
                </p>
                <p class="flex items-start text-sm text-gray-500">
                  {{ service.description }}
                </p>
              </div>
              <div class="ml-auto">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  +
                </button>
                <span class="px-3">1</span>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  -
                </button>
              </div>
              <div class="ml-auto">
                <p class="font-bold uppercase text-blue-500">
                  KSHS&nbsp;{{ service.price }}
                </p>
                <p class="text-sm text-gray-500">starts from</p>
              </div>
            </div>
          </button>
        </p>
      </template>
      <template #modal_footer>
        <button
          type="button"
          @click="toggleModal('close')"
          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Got it, thanks!
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { ref } from "vue";
const products = [
  {
    id: 1,
    name: "Laundry & House Chores",
    to: [
      {
        name: "Service Form",
        description: "service cleaning & Laundry",
        price: "200",
      },
      {
        name: "Service Form",
        description: "service cleaning & Laundry",
        price: "200",
      },
      {
        name: "Service Form",
        description: "service cleaning & Laundry",
        price: "200",
      },
      {
        name: "Service Form",
        description: "service cleaning & Laundry",
        price: "200",
      },
    ],
    imageSrc: "/imgs/services/mamasafi_laundry.webp",
    imageAlt: "LAundry & House Chores",
  },
  {
    id: 1,
    name: "Duvet Cleaning",
    to: [{ name: "ServiceForm" }],
    imageSrc: "/imgs/services/mamsafi_duvet.jpg",
    imageAlt: "Duvet Cleaning",
  },
  {
    id: 1,
    name: "House Cleaning",
    to: [{ name: "ServiceForm" }],
    imageSrc: "/imgs/services/mamasafi_house_cleaning.jpg",
    imageAlt: "House cleaning",
  },
  {
    id: 1,
    name: "Upholtery Cleaning",
    to: [{ name: "ServiceForm" }],
    imageSrc: "/imgs/services/mamasafi_upholstery_cleaning.jpg",
    imageAlt: "Upholstery Cleaning",
  },
  {
    id: 1,
    name: "For Business",
    to: [{ name: "ServiceForm" }],
    imageSrc: "/imgs/services/mamasafi_for_business.jpg",
    imageAlt: "For Business",
  },
  // More products...
];
const isOpenValue = ref(false);
const serviceShow = ref(true);
const variationsShow = ref(false);
var modal_data;
// var isOpenValue
export default {
  components: {
    Modal,
  },
  data() {
    return {
      products,
      isOpenValue,
      serviceShow,
      variationsShow,
    };
  },
  methods: {
    toggleModal(product) {
      if (product == "close") {
        this.isOpenValue = !this.isOpenValue;
      } else {
        this.isOpenValue = !this.isOpenValue;
        this.modal_data = product;
      }
    },
  },
};
</script>
