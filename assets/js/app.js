const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Emails:',
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
      emailsGenerated: 10,
      allEmailsGenerated: false,
    }
  },
  methods: {
    generateEmails() {
      for (let i = 0; i < this.emailsGenerated; i++) {
        axios.get(this.url)
          .then(response => {
            this.emails.push(response.data.response);
            if (this.emails.length === this.emailsGenerated) {
              this.allEmailsGenerated = true;
            }
          });
      }
    },
  },
  mounted() {
    this.generateEmails();
  },
}).mount('#app')