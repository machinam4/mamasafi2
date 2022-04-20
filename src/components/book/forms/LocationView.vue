<template>
    <div class="mr-2">
        <div class="">
            <label for="gmap_autocomplete" class="sr-only">Enter Location</label>
            <input
                id="gmap_autocomplete"
                name="location"
                type="text"
                autocomplete="location"
                required=""
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Location"
            />
        </div>
    </div>
    <div class="p-3">
    <div ref="mapDiv" style="width: 100%; height: 24rem;"></div>
    </div>
</template>
<script setup>
import{computed, onMounted, ref} from 'vue';
import {useGeolocation} from '../../functions/geolocation.js'
import { Loader } from '@googlemaps/js-api-loader'


const {coords} = useGeolocation();
const currpos = computed(()=>({
    lat: coords.value.latitude,
    lng: coords.value.longitude
}))
// maps
const GOOGLE_MAPS_API_KEY = 'AIzaSyBsID-aQ5tK7hh4sPfrphA2sV9_zw1d3Jg'
const loader = new Loader({
    apiKey : GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"]
    })
const mapDiv = ref(null)
onMounted(async()=>{
    await loader.load()
    const map = new google.maps.Map(mapDiv.value,{
        center: currpos.value,
        zoom: 18
    })
    const marker = new google.maps.Marker({
        position: currpos.value,
        map: map,
    });
    new google.maps.Map(document.getElementById('gmap_autocomplete'))
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('gmap_autocomplete'),{
          componentRestrictions: { country: "ke" },  
        //   types: ["address"],
          fields: ["address_components", "geometry"],
      }
    );
    google.maps.event.addListener(autocomplete, "place_changed", ()=>{     
      var place = autocomplete.getPlace()
      marker.setPosition(place.geometry.location)
      map.setCenter(place.geometry.location, 20)
  })
})



</script>