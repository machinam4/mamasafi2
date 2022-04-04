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
        {{ modal_data.name }}
      </template>
      <template #modal_content>
        <div
          class="text-sm text-gray-500 flex"
          v-for="service in modal_data.to"
          :key="service.name"
        >
          <button
            @click="goToNext(service)"
            class="hover:border hover:border-blue-500 w-full active:bg-blue-600 px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-radial transition-all duration-500"
            type="button"
          >
            <div class="grid grid-cols-2 gaps-4 flex justify-center">
              <div>
                <p class="flex items-start font-bold uppercase text-blue-500">
                  {{ service.name }}
                </p>
                <p class="flex items-start text-sm text-gray-500">
                  {{ service.description }}
                </p>
              </div>
              <div class="ml-auto">
                <p class="font-bold uppercase text-blue-500">
                  KSHS&nbsp;{{ service.variation.price }}
                </p>
                <p class="text-sm text-gray-500">starts from</p>
              </div>
            </div>
          </button>
        </div>
      </template>
      <template #modal_footer>
        <button
          type="button"
          @click="toggleModal('close')"
          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Cancel
        </button>
      </template>
    </Modal>    
  </div>
  <Modal :isOpenValue="variationsShow" v-if="variationsShow">
      <template #modal_title>
        {{ modal_data.name }}
      </template>
      <template #modal_content>
       <div class="md:grid md:grid-cols-6 md:gap-4">
         <div class="md:col-span-3  md:mr-8 py-10">
            <div class="pb-10">
                <p class="flex justify-center font-bold uppercase text-blue-500">
                  {{modal_data.variation.name}}
                </p>
                <p class="flex justify-center text-sm text-gray-500">
                  Maximum is {{modal_data.variation.maximum}}&nbsp;{{modal_data.variation.unit_measure}}
                </p>
            </div>
           <div class="flex justify-between">
            <button
            type="button"
            @click="addItem(-1, modal_data.variation.maximum)"
            class="px-8 bg-blue-100 text-lg border border-transparent rounded-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >-</button>
             <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <input 
                type="number" v-model="ItemCount" name="count" class="text-center tx-bold mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            <button
            type="button"
            @click="addItem(+1, modal_data.variation.maximum)"
            class="px-8 mr-0 bg-blue-100 text-lg border border-transparent rounded-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >+</button>
           </div>
         </div>
         <div class="md:col-span-3 py-10">
           <div class="grid grid-cols-2 gaps-4 flex justify-center">
              <div class="">
                <p class="flex items-start text-sm text-gray-500">
                  Service
                </p>
                <p class="flex items-start text-sm uppercase text-blue-500">
                  {{ modal_data.name }}
                </p>
                <p class="flex items-start text-sm text-gray-500">
                  Number of {{modal_data.variation.unit_measure}}
                </p>
                <p class="flex items-start text-sm uppercase text-blue-500">
                   {{ItemCount}}
                </p>
                
              </div>
              <div class="ml-auto">
                <p class="text-sm text-gray-500">Total Price</p>
                <p class="font-bold uppercase text-blue-500">
                  KSHS&nbsp;{{modal_data.variation.price*ItemCount}}
                </p>
              </div>
            </div>
           </div>
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
          @click="goToNext('selectDate')"
          class="inline-flex justify-center mr-0 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Next
        </button>
        </div>
      </template>
    </Modal> 
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
        name: "Laundry Only",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "200",
            maximum: "5"
          }

      },
      {
        name: "Laundry + Utensils",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "400",
            maximum: "6"
          }
        
      },
      {
        name: "Laundry + Utensils",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "400",
            maximum: "6"
          }
        
      },
      {
        name: "Laundry + House Cleaning",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "600",
            maximum: "8"
          }
        
      },
      {
        name: "Laundry  + Utensils + House Cleaning",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "800",
            maximum: "10"
          }
        
      },
      {
        name: "Laundry  + All Chores",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "1000",
            maximum: "10"
          }
        
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
        variation:
          {
            name: "Number of",
            unit_measure: "Duvets",
            price: "1500",
            maximum: "5"
          }

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
        variation:
          {
            name: "Size",
            unit_measure: "Bedrooms",
            price: "2000",
            maximum: "5"
          }

      },
      {
        name: "Occupied",
        description: "House cleaning",
        variation:
          {
            name: "size",
            unit_measure: "Bedrooms",
            price: "4000",
            maximum: "6"
          }
        
      }
    ],
    imageSrc: "/imgs/services/mamasafi_house_cleaning.jpg",
    imageAlt: "House cleaning",
  },
  {
    id: 1,
    name: "Upholtery Cleaning",
    to: [
      {
        name: "Seats",
        description: "Seats cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Seats",
            price: "200",
            maximum: "10"
          }

      },
      {
        name: "Carpets",
        description: "Carpet cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Carpets",
            price: "200",
            maximum: "6"
          }
        
      },
      {
        name: "Bed/mattress",
        description: "service cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Beds/Mattress",
            price: "400",
            maximum: "6"
          }
        
      },
      {
        name: "Fabric bed only",
        description: "service cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Beds",
            price: "600",
            maximum: "8"
          }
        
      },
      {
        name: "Fabric bed with Mattress",
        description: "service cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Beds",
            price: "800",
            maximum: "10"
          }
        
      },
      {
        name: "Mattress Only",
        description: "service cleaning",
        variation:
          {
            name: "Number of",
            unit_measure: "Mattresses",
            price: "1000",
            maximum: "10"
          }
        
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
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "200",
            maximum: "5"
          }

      },
      {
        name: "Office Space",
        description: "service cleaning",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "400",
            maximum: "6"
          }
        
      },
      {
        name: "After Construction Cleaning",
        description: "service cleaning & Laundry",
        variation:
          {
            name: "Duration",
            unit_measure: "Hours",
            price: "400",
            maximum: "6"
          }
        
      },
    ],
    imageSrc: "/imgs/services/mamasafi_for_business.jpg",
    imageAlt: "For Business",
  },
  // More products...
];
const serviceShow = ref(false);
const variationsShow = ref(false);
var modal_data;
var ItemCount = 1;
// var isOpenValue
export default {
  components: {
    Modal,
  },
  data() {
    return {
      products,
      serviceShow,
      variationsShow,
      ItemCount,
    };
  },
  methods: {
    toggleModal(product) {
      if (product == "close") {
        this.serviceShow = !this.serviceShow;
      } else {
        this.serviceShow = !this.serviceShow;
        this.modal_data = product;
      }
    },
    goToNext(service) {
      this.serviceShow = false;
      if (service == "close") {
        this.variationsShow = !this.variationsShow;
      } else {
        this.variationsShow = !this.variationsShow;
        this.modal_data = service;
      }
    },
    addItem(by, maximum) {      
      let value = parseInt(this.ItemCount) + parseInt(by);
      if (value <= 1) {
        this.ItemCount = 1
      }else if(value > maximum) {
        this.ItemCount = maximum
      }else{
        this.ItemCount = parseInt(this.ItemCount) + parseInt(by);
      }       
    }
  },
};
</script>
