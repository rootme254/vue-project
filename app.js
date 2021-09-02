const app = Vue.createApp(
{

	data() {
		return{
			firstName: "Gerson",
			lastName: "Maina",
			email :"gersonmaina@gmail.com",
			gender:"male",
			picture:"https://randomuser.me/api/portraits/men/10.jpg"
		}
	},

	methods: {

		async getUser() {
			const res = await fetch('https://randomuser.me/api')
			const {results} = await res.json()
			console.log(results)

			this.firstName=results[0].name.first
			this.firstName=results[0].name.last
			this.gender=results[0].gender
			this.picture=results[0].picture.medium
			this.email=results[0].email

			console.log(this.gender)

		}
	}

})

app.mount('#app')