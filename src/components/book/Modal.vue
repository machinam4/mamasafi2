<template>
  <TransitionRoot appear :show="isOpenValue" as="template">
    <Dialog as="div">
      <div class="fixed inset-0 z-10 overflow-y-auto overflow-x-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg text-center uppercase font-bold font-medium leading-6 text-gray-900"
              >
                <slot name="modal_title" />
              </DialogTitle>
              <div class="mt-2">
                <div class="md:grid md:grid-cols-6 md:gap-4">
                  <div class="md:col-span-4 md:mr-8 py-10 border-r-4 border-blue-700">
                    <slot name="modal_content" />
                  </div>
                  <div class="md:col-span-2 py-10" v-if="$store.state.cartItems.service != ''">
                    <slot name="modal_cart"/>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <slot name="modal_footer"/>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionChild,
  TransitionRoot,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  isOpenValue: false,
});
</script>
