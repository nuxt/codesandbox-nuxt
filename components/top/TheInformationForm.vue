<template>
  <b-container>
    <b-form>
      <b-form-row>
        <b-col cols="12" md="3">
          <FormInputName v-model="name"/>
        </b-col>
        <b-col cols="12" md="4">
          <FormInputEmail v-model="email"/>
        </b-col>
        <b-col cols="12" md="5">
          <FormInputPhone v-model="phone"/>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <FormTextareaMessage v-model="message"/>
        </b-col>
      </b-form-row>
      <b-row align-h="center" class="mt-3">
        <b-col cols="4">
          <b-button variant="primary" v-b-modal.confirmation block>SUBMIT!</b-button>
          <b-modal id="confirmation" title="Confirmation">
            <p>Name: {{ name }}</p>
            <p>Email: {{ email }}</p>
            <p>Phone: {{ phone.number }}</p>
            <p>Message: {{ message.type }}</p>
            <p>{{ message.text }}</p>
          </b-modal>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      email: "",
      phone: {
        country: "",
        number: ""
      },
      message: {
        type: "",
        text: ""
      }
    };
  }
};
</script>
