<template>
  <div v-show="$store.state.serviceSelect.sub_service">
    <Disclosure
      v-for="sub_service in $store.state.serviceSelect.sub_service"
      :key="sub_service.name"
      v-slot="{ open }"
    >
      <DisclosureButton
        :class="open ? 'bg-blue-500' : ''"
        class="flex justify-between hover:border hover:border-blue-500 w-full px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-radial transition-all duration-500"
      >
        <SortDescendingIcon
          :class="open ? 'transform rotate-180' : ''"
          class="w-8 h-8 text-gray-300"
        />
        <p
          :class="open ? 'text-white' : 'text-blue-500'"
          class="font-bold uppercase"
        >
          {{ sub_service.name }}
        </p>
        <ChevronUpIcon
          :class="open ? 'transform rotate-180 text-white' : 'text-blue-500'"
          class="w-8 h-8"
        />
      </DisclosureButton>
      <DisclosurePanel class="text-gray-500">
        <div
          class="text-sm text-gray-500 flex"
          v-for="service in sub_service.to"
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
                  KSHS&nbsp;{{ service.variation.price }} <span> </span>
                </p>
                <p class="text-sm text-gray-500">starts from</p>
              </div>
            </div>
          </button>
        </div>
        `
      </DisclosurePanel>
    </Disclosure>
  </div>

  <div
    class="text-sm text-gray-500 flex"
    v-for="service in $store.state.serviceSelect.to"
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
            KSHS&nbsp;{{ service.variation.price }} <span> </span>
          </p>
          <p class="text-sm text-gray-500">starts from</p>
        </div>
      </div>
    </button>
  </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, SortDescendingIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { onMounted } from "vue";
const store = useStore();
function goToNext(service) {
  store.commit("addServiceTocart", service);
  store.commit("setNextModal", "dateSelectModal");
  // store.commit("setPrevModal", "serviceModal");
  store.commit('setActiveModal', 'variationModal');
}
// onMounted(() => {
  
// });
</script>
