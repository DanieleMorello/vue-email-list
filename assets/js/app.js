const { createApp } = Vue
createApp({
  data() {
    return {
      title: 'Email:',
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      my_data: null,
      email: null,
    }
  },
  mounted() {
    // console.log(axios);
    
    //console.log(axios.get(this.url)); // Promise
    // this.url (uri+request body)
    axios
    .get(this.url)
    .then(response => {
      // prendo l'intero responso (solo i dati) e lo salvo nell'oggetto vue
      console.log(response); // contiene un oggetto 
      //console.log(response.data);
      this.my_data = response.data 
      // prendo dal responso solo i dati di cui ho bisogno.
      console.log(response.data.response);
      this.email= response.data.response
    })
  },
}).mount('#app')