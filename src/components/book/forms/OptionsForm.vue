 <div
          class="text-sm text-gray-500 "
        >
           <div class="grid grid-cols-2 ">
             <div class="flex justify-center">
                <button
                  type="button"
                  @click="addItem(-1)"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-8 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  -
                </button>
                <span class="px-12 py-4"><input type="text" v-model="ItemCount"></span>

                <button
                  type="button"
                  @click="addItem(+1)"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block px-8 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  +
                </button>
              </div>
              <div>
                <p>123 resultsa</p>
              </div>
           </div>
        </div>