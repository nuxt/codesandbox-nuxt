<template>
   <section>
      <div class="container">
         <p>Here you can see and manage all parking-feature customers.</p>
         <div class="error" v-if="error">{{ error }}</div>
         <table>
            <thead>
            <tr>
               <th>#</th>
               <th>Name</th>
               <th>API-Key</th>
               <th>Marker</th>
               <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="!loading" v-for="(tableCustomer, i) in customers" :key="tableCustomer.name">
               <td>
                  <div>
                     {{ i + 1 }}
                  </div>
               </td>
               <td>
                  <div>
                     {{ tableCustomer.name }}
                  </div>
               </td>
               <td>
                  <div>
                     {{ tableCustomer.apiKey }}
                  </div>
               </td>
               <td>
                  <img class="customer-marker" :src="getCustomerMarker(tableCustomer)"/>
               </td>
               <td>
                  <div class="action-link" @click="customer = tableCustomer; view.edit = true">Edit</div>
                  <div class="action-link" @click="deleteCustomer(tableCustomer.id)">Delete</div>
               </td>
            </tr>
            </tbody>
         </table>
         <button type="button" @click="addCustomer" v-if="!view.add && !view.edit">+ Add Customer</button>
         <div class="editor" v-if="editorView">
            <h2>
               Configure Customer
               <img
                  src="~/assets/images/close.svg"
                  alt="Close"
                  @click="view.add = false; view.edit = false"
                  class="close-icon"
               >
            </h2>
            <div>
               <label for="customer-name-input">Name:</label>
               <input id="customer-name-input" v-model="customer.name" :disabled="view.edit"/>
            </div>
            <div>
               <label for="customer-coordinates-lat-input">Latitude:</label>
               <input id="customer-coordinates-lat-input" v-model="customer.coordinates.lat"/>
            </div>
            <div>
               <label for="customer-coordinates-lng-input">Longitude:</label>
               <input id="customer-coordinates-lng-input" v-model="customer.coordinates.lng"/>
            </div>
            <div>
               <label for="customer-zoom-input">Zoom:</label>
               <input id="customer-zoom-input" v-model="customer.zoom"/>
            </div>
            <div>
               <label for="customer-marker-input">Marker:</label>
               <input id="customer-marker-input" type="file" @change="fileUploadChanged"/>
            </div>
            <button type="button" @click="view.add ? createCustomer() : editCustomer()" v-if="!loading">Save</button>
         </div>
      </div>
   </section>
</template>

<script>
   import axios from "axios"

   export default {
      name: "AdminParking",
      middleware: "isAdmin",
      layout: "admin",
      data() {
         return {
            loading: false,
            error: false,
            customer: {
               name: undefined,
               zoom: undefined,
               coordinates: {
                  lat: undefined,
                  lng: undefined
               },
               file: undefined
            },
            view: {
               add: false,
               edit: false
            },
            customers: []
         }
      },
      beforeMount() {
         this.getCustomers();
      },
      computed: {
         editorView() {
            return this.view.add || this.view.edit;
         }
      },
      methods: {
         getCustomerMarker(customer) {
            return `${process.env.PARKING_SERVER || "http://localhost:8080"}/marker/${customer.marker}`
         },

         fileUploadChanged() {
            const files = event.target.files;
            const formData = new FormData();
            formData.append("marker", files[0]);

            this.customer.file = formData;
         },

         addCustomer() {
            this.customer = {
               name: undefined,
               zoom: undefined,
               coordinates: {
                  lat: undefined,
                  lng: undefined
               },
               file: undefined
            };
            this.view.add = true
         },

         async getCustomers() {
            this.loading = true;
            try {
               this.customers = (await axios.get(`${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/customer`)).data.customer;
            } catch (e) {
               console.error(e);
               this.error = "Could not load customers";
            }
            this.loading = false;
         },

         async createCustomer() {
            this.loading = true;
            const customer = this.customer;
            const data = {
               name: customer.name,
               coordinates: {
                  lat: customer.coordinates.lat,
                  lng: customer.coordinates.lng
               },
               zoom: customer.zoom
            };
            try {
               const createdCustomer = await axios.post(`${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/customer`, data);
               await this.uploadMarker(createdCustomer.data.customer.id);
               this.view.add = false;
            } catch (e) {
               console.error(e);
               this.error = "Customer could not be saved";
            }
            this.getCustomers();
         },

         async editCustomer() {
            this.loading = true;
            const customer = this.customer;
            const data = {
               name: customer.name,
               coordinates: {
                  lat: customer.coordinates.lat,
                  lng: customer.coordinates.lng
               },
               zoom: customer.zoom,
               marker: customer.name
            };
            try {
               const updatedCustomer = await axios.put(`${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/customer`, data);
               await this.uploadMarker(updatedCustomer.data.customer.id);
               this.view.edit = false;
            } catch (e) {
               console.error(e);
               this.error = "Customer could not be updated";
            }
            this.getCustomers();
         },

         async uploadMarker(id) {
            if (this.customer.file) {
               await axios({
                  method: "PUT",
                  url: `${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/marker/${id}`,
                  data: this.customer.file,
                  headers: {'Content-Type': 'multipart/form-data'}
               });
            }
         },

         async deleteCustomer(id) {
            this.loading = true;
            try {
               await axios.delete(`${process.env.PARKING_SERVER || "http://localhost:8080"}/api/v1/customer/${id}`)
            } catch (e) {
               console.error(e);
               this.error = "Could not delete customer";
            }
            this.getCustomers();
         }
      }
   }
</script>

<style lang="scss" scoped>
   table {
      width: 100%;
      text-align: left;
   }

   .error {
      color: red;
   }

   .action-link {
      text-decoration: underline;
      cursor: pointer;
   }

   .customer-marker {
      max-height: 20px;
   }
</style>
