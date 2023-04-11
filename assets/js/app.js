const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Emails:',
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
      emailsGenerated: 10,
    }
  },
  mounted() {
    for (let i = 0; i < this.emailsGenerated; i++) {
      axios.get(this.url)
        .then(response => {
          this.emails.push(response.data.response);
        })
    }
  },
}).mount('#app')