export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Melon"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
  created() {
    console.log("Mixin Created Hook");
  },
};
