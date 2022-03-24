
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
                  <select id="country" @change="onServiceChange($event)" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800/30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Asorted Clotehs Only</option>
                    <option>Pick &amp; Drop</option>
                  </select>
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
export default {
    methods:{
        onServiceChange(event) {
            console.log(event.target.value)
        }
    }
}
</script>