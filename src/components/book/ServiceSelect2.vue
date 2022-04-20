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
    <Modal :isOpenValue="serviceShow" v-if="serviceShow">
      <template #modal_title>
        {{ $store.state.serviceSelect.name }}
      </template>
      <template #modal_content>
        <ServicesView v-if="$store.state.modalActive == 'serviceModal'" />
        <VariationsView v-if="$store.state.modalActive == 'variationModal'" />
        <DateSelectView v-if="$store.state.modalActive == 'dateSelectModal'" />
        <AgentSelectView v-if="$store.state.modalActive == 'agentSelectModal'"/>
        <LocationView  v-if="$store.state.modalActive == 'locationModal'"/>
        <LoginUserView v-if="$store.state.modalActive == 'userModal'"/>
      </template>
      <template #modal_cart v-if="$store.state.cartItems.service != ''">
        <div class="grid grid-cols-2 gaps-4 flex justify-center">
          <div class="service">
            <p class="flex items-start text-sm text-gray-500">Service</p>
            <p class="flex items-start text-sm uppercase text-blue-500">
              {{ $store.state.cartItems.service.name }}
            </p>
          </div>
          <div class="ml-auto">
            <div class="units" v-if="$store.state.cartItems.units != ''">
              <p class="flex items-start text-sm text-gray-500">
                Number of
                {{ $store.state.cartItems.service.variation.unit_measure }}
              </p>
              <p class="flex items-start text-sm uppercase text-blue-500">
                {{ $store.state.cartItems.units }}
              </p>
            </div>
          </div>
        </div>
        <div class="booking" v-if="$store.state.cartItems.date != ''">
          <p class="flex items-start text-sm text-gray-500">Booking Date</p>
          <p class="flex items-start text-sm uppercase text-blue-500">
            {{ $store.state.cartItems.date }}
          </p>
        </div>
        <div class="mamasafi" v-if="$store.state.cartItems.mamasafi != ''">
          <p class="flex items-start text-sm text-gray-500">Mamasafi</p>
          <p
            class="flex items-start text-sm uppercase text-blue-500"
            v-if="$store.state.cartItems.mamasafi"
          >
            {{ $store.state.cartItems.mamasafi.name }}
          </p>
        </div>
        <div class="mamasafi" v-if="$store.state.cartItems.location != ''">
          <p class="flex items-start text-sm text-gray-500">Location</p>
          <p
            class="flex items-start text-sm uppercase text-blue-500"
            v-if="$store.state.cartItems.location"
          >
            {{ $store.state.cartItems.location }}
          </p>
        </div>
        <div class="total_price mt-5">
          <p class="text-sm text-gray-500">Total Price</p>
          <p class="font-bold uppercase text-blue-500">
            KSHS&nbsp;{{
              $store.state.cartItems.service.variation.price *
              $store.state.cartItems.units
            }}
          </p>
        </div>
      </template>
      <template #modal_footer>
        <div class="flex justify-between">
          <button
            type="button"
            @click="goToNext('close')"
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="button"
            v-if="$store.state.modalNext != ''"
            @click="goToNext($store.state.modalNext)"
            class="inline-flex justify-center mr-0 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Next
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import Modal from "./Modal.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, SortDescendingIcon } from "@heroicons/vue/solid";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ServicesView from "./forms/ServicesView.vue";
import DateSelectView from "./forms/DateSelectView.vue";
import AgentSelectView from "./forms/AgentSelectView.vue";
import VariationsView from "./forms/VariationsView.vue";
import LocationView from "./forms/LocationView.vue";
import LoginUserView from "./forms/LoginUserView.vue"
import LocationView1 from "./forms/LocationView.vue";
const store = useStore();
const products = [
  {
    id: 1,
    name: "Laundry & House Chores",
    sub_service: [
      {
        name: "Home Visit (Mama Fua)",
        to: [
          {
            name: "Laundry Only",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 200,
              maximum: 5,
            },
          },
          {
            name: "Laundry + Utensils",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 400,
              maximum: 6,
            },
          },
          {
            name: "Laundry + Utensils",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 400,
              maximum: 6,
            },
          },
          {
            name: "Laundry + House Cleaning",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 600,
              maximum: 8,
            },
          },
          {
            name: "Laundry  + Utensils + House Cleaning",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 800,
              maximum: 10,
            },
          },
          {
            name: "Laundry  + All Chores",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 1000,
              maximum: 10,
            },
          },
        ],
      },
      {
        name: "Pick & Drop (Machine Wash)",
        to: [
          {
            name: "Laundry Only",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 200,
              maximum: 5,
            },
          },
          {
            name: "Laundry + Utensils",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 400,
              maximum: 6,
            },
          },
          {
            name: "Laundry + Utensils",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 400,
              maximum: 6,
            },
          },
          {
            name: "Laundry + House Cleaning",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 600,
              maximum: 8,
            },
          },
          {
            name: "Laundry  + Utensils + House Cleaning",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 800,
              maximum: 10,
            },
          },
          {
            name: "Laundry  + All Chores",
            description: "service cleaning & Laundry",
            variation: {
              name: "Duration",
              unit_measure: "Hours",
              price: 1000,
              maximum: 10,
            },
          },
        ],
      },
    ],
    imageSrc: "/imgs/services/mamasafi_laundry.webp",
    imageAlt: "LAundry & House Chores",
  },
  {
    id: 1,
    name: "Duvet Cleaning",
    to: [
      {
        name: "Duvet Cleaning",
        description: "service cleaning",
        variation: {
          name: "Number of",
          unit_measure: "Duvets",
          price: 1500,
          maximum: 5,
        },
      },
    ],
    imageSrc: "/imgs/services/mamsafi_duvet.jpg",
    imageAlt: "Duvet Cleaning",
  },
  {
    id: 1,
    name: "House Cleaning",
    to: [
      {
        name: "Vacant",
        description: "House cleaning",
        variation: {
          name: "Size",
          unit_measure: "Bedrooms",
          price: 2000,
          maximum: 5,
        },
      },
      {
        name: "Occupied",
        description: "House cleaning",
        variation: {
          name: "size",
          unit_measure: "Bedrooms",
          price: 4000,
          maximum: 6,
        },
      },
    ],
    imageSrc: "/imgs/services/mamasafi_house_cleaning.jpg",
    imageAlt: "House cleaning",
  },
  {
    id: 1,
    name: "Upholtery Cleaning",
    sub_service: [
      {
        name: "Seats",
        to: [
          {
            name: "Fabric Seats",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Seats",
              price: 600,
              maximum: 8,
            },
          },
          {
            name: "Leather Seats",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Seats",
              price: 800,
              maximum: 10,
            },
          },
          {
            name: "Dinning Seats",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Seats",
              price: 1000,
              maximum: 10,
            },
          },
          {
            name: "Office Chair",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Chairs",
              price: 1000,
              maximum: 10,
            },
          },
        ],
      },
      {
        name: "Carpets",
        to: [
          {
            name: "Fluffy Carpets",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Carpets",
              price: 600,
              maximum: 8,
            },
          },
          {
            name: "Non-Fluffy Carpets",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Carpets",
              price: 800,
              maximum: 10,
            },
          },
          {
            name: "Woolen Carpets",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Carpets",
              price: 1000,
              maximum: 10,
            },
          },
          {
            name: "Rugs",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Rugs",
              price: 1000,
              maximum: 10,
            },
          },
        ],
      },
      {
        name: "Bed/mattress",
        to: [
          {
            name: "Fabric bed only",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Beds",
              price: 600,
              maximum: 8,
            },
          },
          {
            name: "Fabric bed with Mattress",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Beds",
              price: 800,
              maximum: 10,
            },
          },
          {
            name: "Mattress Only",
            description: "service cleaning",
            variation: {
              name: "Number of",
              unit_measure: "Mattresses",
              price: 1000,
              maximum: 10,
            },
          },
        ],
      },
    ],
    imageSrc: "/imgs/services/mamasafi_upholstery_cleaning.jpg",
    imageAlt: "Upholstery Cleaning",
  },
  {
    id: 1,
    name: "For Business",
    to: [
      {
        name: "Furnished appartments",
        description: "service cleaning",
        variation: {
          name: "Duration",
          unit_measure: "Hours",
          price: 200,
          maximum: 5,
        },
      },
      {
        name: "Office Space",
        description: "service cleaning",
        variation: {
          name: "Duration",
          unit_measure: "Hours",
          price: 400,
          maximum: 6,
        },
      },
      {
        name: "After Construction Cleaning",
        description: "service cleaning & Laundry",
        variation: {
          name: "Duration",
          unit_measure: "Hours",
          price: 400,
          maximum: 6,
        },
      },
    ],
    imageSrc: "/imgs/services/mamasafi_for_business.jpg",
    imageAlt: "For Business",
  },
  // More products...
];
const serviceShow = ref(false);

function toggleModal(product) {
  if (product == "close") {
    serviceShow.value = !serviceShow.value;
  } else {
    serviceShow.value = !serviceShow.value;
    store.commit("setActiveModal", "serviceModal");
    store.commit("serviceSelect", product);
  }
}
function goToNext(modal) {
  if (modal == "close") {
    serviceShow.value = !serviceShow.value;
  } else {
    switch (store.state.modalActive) {
      case "serviceModal":
        store.commit("setActiveModal", "variationModal");
        store.commit("setNextModal", "dateSelectModal");
        break;
      case "variationModal":
        store.commit("setNextModal", "agentSelectModal");
        store.commit("setActiveModal", "dateSelectModal");
        break;
      case "dateSelectModal":
        store.commit("setActiveModal", "agentSelectModal");
        store.commit("setNextModal", "locationModal");
        break;
      case "agentSelectModal":
        store.commit("setActiveModal", "locationModal");
        store.commit("setNextModal", "userModal");
        break;
      case "locationModal":
        store.commit("setActiveModal", "userModal");
        store.commit("setNextModal", "paymentsModal");
        break;
      default:
        serviceShow.value = !serviceShow.value;
        break;
    }
  }
}
</script>
