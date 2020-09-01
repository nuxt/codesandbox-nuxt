import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate";
import ja from "vee-validate/dist/locale/ja.json";
import {
  required,
  required_if,
  email,
  max,
  min,
  regex
} from "vee-validate/dist/rules";

extend("required", required);
extend("required_if", required_if);
extend("email", email);
extend("max", max);
extend("min", min);
extend("regex", regex);

extend("phone_jp", {
  params: ["phoneCountry", "phoneNumber"],
  validate: (value, { phoneCountry, phoneNumber }) => {
    if (phoneCountry !== "jp") return true;
    const pattern = /^(((0(\d{1}[-(]?\d{4}|\d{2}[-(]?\d{3}|\d{3}[-(]?\d{2}|\d{4}[-(]?\d{1}|[5789]0[-(]?\d{4})[-)]?)|\d{1,4}\-?)\d{4}|0120[-(]?\d{3}[-)]?\d{3})$/g;
    return phoneNumber.match(pattern);
  },
  message: "This phone number is incorrect."
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
localize("ja", ja);
