<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-6 col-xs-12 col-md-offset-3 col-sm-offset-2">
        <h1>Vuex</h1>

        <!-- without using $store -->
        <!-- <app-result :counter="counter" /> -->

        <!-- with using $store -->
        <app-result />
        <app-another-result />

        <hr />

        <!-- without using $store -->
        <!-- <app-counter @updated="counter += $event" /> -->

        <!-- with using $store -->
        <app-counter />
        <app-another-counter />

        <hr />
        <input type="text" v-model="value" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CounterNumber from "./components/CounterNumber.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import ResultNumber from "./components/ResultNumber.vue";
import AnotherResult from "./components/AnotherResult.vue";
import * as types from "./store/types";

export default {
  name: "App",
  computed: {
    value: {
      // getter and setter in computed property
      /* 
        using a setter in computed property is something you rarely need,
        because computed in the end means it depends on something else and recalculated
      */
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      },
    },
  },
  components: {
    appCounter: CounterNumber,
    appAnotherCounter: AnotherCounter,
    appResult: ResultNumber,
    appAnotherResult: AnotherResult,
  },
  // without using $store
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
};
</script>
