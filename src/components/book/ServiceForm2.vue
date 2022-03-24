<template>
    <div class="max-w-2xl mx-auto py-5 px-4 sm:py* sm:px-6 lg:max-w-7xl lg:px-8">      
      <div class="text-center">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Mamasafi Cleaning Services</h2>
      <p>We offer a variety of home and cleaning services, all are performed by a professional team.</p>
      </div>
      
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-gray-800/30 space-y-6 sm:p-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Service</label>
                  <select id="country" @change="serviceSelect = service.id" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800/30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option v-for="service in services" :key="service.id" v-bind:value="service.id">{{service.title}}</option>
                  </select>
                </div>
            </div>
            <div v-for="service in services" :key="service.id" v-bind:value="service.id">
              <div v-if="service.id == serviceSelect">
                <div class="px-4 py-5 bg-gray-800/30 space-y-6 sm:p-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="variation" class="block text-sm font-medium text-gray-700">variation</label>
                      <select id="variation" name="variation" autocomplete="variation-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800/30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option v-for="variation in service.variations" :key="variation.id">{{variation.title}}</option>
                      </select>
                    </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-800/30 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
// var service = []
const services = [
  {
    id : 1,
    title  : 'Home Visit',
    variations: [
      {
        id : 1,
        title: 'Laundry Only'
      },
      {
        id : 2,
        title : 'Laundry + Utensils'
      },
      {
        id : 3,
        title : 'Laundry + Ironing'
      },
      {
        id : 4,
        title : 'Laundry + House cleaning'
      },
      {
        id : 5,
        title : 'Laundry + utensils + House cleaning'
      },
      {
        id : 6,
        title : 'Laundry + All Chores'
      }
    ]
    },
    {
      id : 2,
      title : 'Pick & Drop',
      variations: [
        {
        id : 1,
        name : 'Assorted clothes only'
      },
      {
        id : 2,
        name : 'Assorted clothes + towels'
      },
      {
        id : 3,
        name : 'Assorted clothes + Bed Linen'
      },
      {
        id : 4,
        name : 'Assorted clothes + Bed Linen + Towel'
      },
       {
        id : 5,
        name : 'Bed Linen Only'
      },
       {
        id : 6,
        name : 'Towels Only'
      },
       {
        id : 7,
        name : 'Duvets Only'
      },
      {
        id : 8,
        name : 'Blankets Only'
      },
      ]
    }
]

export default {
  setup(){
    return{
      services,
      // service,
      serviceSelected : 1
    }
  },
    methods:{
        onServiceChange(event) {
            console.log(event.target.value)
            serviceSelected = event.target.value;
            service = services.filter(e=> e.id == event.target.value)[0].variations
            // variation = event.target.value;
            // switch (variation) {
            //   case 'Home Visit':

                
            //     break;
            
            //   default:
            //     break;
            // }

        }
    }
}
</script>