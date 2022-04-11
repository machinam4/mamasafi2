<template>
    
          <v-date-picker
            v-model="date"
            :min-date="new Date()"
            :attributes="dateAttrs"
            mode="datetime"
            :minute-increment="30"
            :valid-hours="{ min: 7, max: 17 }"
            is-expanded
          />
</template>
<script setup>
import { computed } from "vue";
import { useStore } from 'vuex'
const store = useStore()

const dateAttrs = [
  {
    key: "today",
    dot: "red",
    dates: new Date(),
  },
];
var date = computed({
  get: () => store.state.cartItems.date,
  set: (val) => {
    store.commit('setDate', val)
  }
});
</script>