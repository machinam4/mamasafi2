<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import CleanerForm from './CleanerForm.vue'
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
        title : 'Assorted clothes only'
      },
      {
        id : 2,
        title : 'Assorted clothes + towels'
      },
      {
        id : 3,
        title : 'Assorted clothes + Bed Linen'
      },
      {
        id : 4,
        title : 'Assorted clothes + Bed Linen + Towel'
      },
       {
        id : 5,
        title : 'Bed Linen Only'
      },
       {
        id : 6,
        title : 'Towels Only'
      },
       {
        id : 7,
        title : 'Duvets Only'
      },
      {
        id : 8,
        title : 'Blankets Only'
      },
      ]
    }
]

export default {
  components: { CleanerForm },
  data() {
  	return {
      services,
	    serviceSelect: 0
  	}
	},
  methods:{    
    changeService(event){
      console.log(this.serviceSelect)
      this.serviceSelect = event.target.value
      console.log(this.serviceSelect)
    }
  }
}
// var serviceSelected = []

</script>

<template>
    <div class="max-w-2xl mx-auto py-5 px-4 sm:py* sm:px-6 lg:max-w-7xl lg:px-8">      
      <div class="text-center">
        <h2 class="text-2xl font-extrabold tracking-tight text-white">Mamasafi Cleaning Services</h2>
      <p>We offer a variety of home and cleaning services, all are performed by a professional team.</p>
      </div>
      
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-gray-800/30 space-y-6 sm:p-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-white">Service</label>
                  <select id="country" @change="serviceSelect = $event.target.value" name="country" autocomplete="country-name" class="text-white mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800/30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option> --- Select Service---</option>
                    <option v-for="service in services" :key="service.id" :value="service.id" >{{service.title}}</option>
                  </select>
                </div>
            </div>
            <div v-for="service in services" :key="service.id" v-bind:value="service.id">
              <div v-if="service.id == serviceSelect">
                <div class="px-4 py-5 bg-gray-800/30 space-y-6 sm:p-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="variation" class="block text-sm font-medium text-white">variation</label>
                      <select id="variation" name="variation" autocomplete="variation-name" class="text-white mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800/30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option v-for="variation in service.variations" :key="variation.id">{{variation.title}}</option>
                      </select>
                    </div>
                </div>
              </div>
            </div>
            <CleanerForm/>
            <div class="px-4 py-3 bg-gray-800/30 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

