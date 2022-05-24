// Vue
import { computed, ref, reactive } from "vue";

// Store
import { useTemplateStore } from "./store/template.store";

// Components
import button from "./components/button.component.vue";

export default {
  components: {
    "my-button": button,
  },
  setup() {
    const store = useTemplateStore();

    return {
      store,
    };
  },
};
