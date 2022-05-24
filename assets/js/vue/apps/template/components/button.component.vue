<template>
  <button @click="store.count++">clicked {{ store.count }} times!</button>
  <span v-if="store.count === 4">Click me one more time!</span>
  <template v-if="store.count > 4">
    <input type="text" placeholder="Change title" v-model="vmTitle" />
    <button type="button" @click="setStoreTitle">Change title</button>
  </template>
</template>

<script>
import { ref } from "vue";

import { useTemplateStore } from "../store/template.store";

export default {
  setup() {
    const store = useTemplateStore();
    const vmTitle = ref("");

    const setStoreTitle = () => {
      store.setTitle(vmTitle.value);
    };
    return { store, vmTitle, setStoreTitle };
  },
};
</script>
