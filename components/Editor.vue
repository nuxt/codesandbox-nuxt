<template>
  <div id="top">
    <!-- Text Editor -->
    <form autoComplete="off" @submit.prevent="submitForm">
      <div>
        <Label html-for="title">Título</Label>

        <Input
          id="title"
          v-model="baseState.title"
          type="title"
          class="block mt-1 w-full"
          required
          auto-focus
          auto-complete="off"
        />
      </div>

      <!-- <div class="mt-4">
        <Label html-for="menu">Selecione o menu</Label>

        <Select
          id="menu"
          v-model="menu"
          type="menu"
          class="block mt-1 w-full"
          required
          :options="options"
        />
      </div> -->

      <div class="mt-4">
        <Label html-for="content">Conteúdo</Label>

        <TuiEditor
          id="content"
          mode="markdown"
          height="300px"
          class="my-6"
          v-model="baseState.content"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <Button class="ml-3">Login</Button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseState: {
        title: "",
        menu: "",
        published: false,
        content: "",
      },
      options: [
        { title: "Um", id: 1 },
        { title: "Dois", id: 2 },
        { title: "Três", id: 3 },
      ],
    };
  },
  methods: {
    submitForm(event) {
      //
    },
  },
};
</script>
// https://opensourcelibs.com/lib/tui-nuxt-editor