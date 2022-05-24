import { defineStore } from "pinia";

export const useTemplateStore = defineStore({
  id: "templateStore",
  state: () => ({
    count: 0,
    title: "Hello World!!",
  }),
  actions: {
    setTitle(newTitle) {
      this.title = newTitle;
    },
  },
});
