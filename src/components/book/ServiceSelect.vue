<template>  
    <div class="max-w-2xl mx-auto py-5 px-4 sm:py* sm:px-6 lg:max-w-7xl lg:px-8">      
      <div class="text-center">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Mamasafi Cleaning Services</h2>
      <p>We offer a variety of home and cleaning services, all are performed by a professional team.</p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-lg font-extrabold text-white">
                <router-link :to="product.to">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: 'Laundry & House Chores',
    to: {name : 'ServiceForm'},
    imageSrc: "/imgs/services/mamasafi_laundry.webp",
    imageAlt: "LAundry & House Chores",
  },
  {
    id: 1,
    name: 'Duvet Cleaning',
    to: {name : 'ServiceForm'},
    imageSrc: "/imgs/services/mamsafi_duvet.jpg",
    imageAlt: "Duvet Cleaning",
  },
  {
    id: 1,
    name: 'House Cleaning',
    to: {name : 'ServiceForm'},
    imageSrc: "/imgs/services/mamasafi_house_cleaning.jpg",
    imageAlt: "House cleaning",
  },
  {
    id: 1,
    name: 'Upholtery Cleaning',
    to: {name : 'ServiceForm'},
    imageSrc: "/imgs/services/mamasafi_upholstery_cleaning.jpg",
    imageAlt: "Upholstery Cleaning",
  },
  {
    id: 1,
    name: 'For Business',
    to: {name : 'ServiceForm'},
    imageSrc: "/imgs/services/mamasafi_for_business.jpg",
    imageAlt: "For Business",
  }
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
}
</script>