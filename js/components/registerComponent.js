export default {
    template: `
    <div class="form-container" > 
        <form method="post">
            <p>Sign up to our newsletters for exclusive deals and events to look forward to.</p>
            <input type="text" v-model="input.fname" placeholder="first name" id="fname" required>
            <input type="text" v-model="input.lname" placeholder="last name" id="lname" required>
            <input type="email" v-model="input.email" placeholder="email" id="email" required>
            <input type="text" v-model="input.country" placeholder="country" id="country" required>

            <button v-on:click.prevent="register()" type="submit">Send Me News!</button>
        </form>
    </div>
    `,

    data() {
        return{
            input:{
                fname:"",
                lname:"",
                email:"",
                country:""
            }
        }
    },

    created: function() {
        this.$parent.navTrue = false;
    },

    methods: {
        register() {
            console.log("trying to register");

            // check against our live account creds
            if (this.input.fname != "" && this.input.lname != "" && this.input.email != "" && this.input.country != "") {

                // create some form data to do a POST request
                let formData = new FormData();

                formData.append("fname", this.input.fname);
                formData.append("lname", this.input.lname);
                formData.append("email", this.input.email);
                formData.append("country", this.input.country);

                // do a fetch here and check creds on the back end
                let url = `./admin/sign-up.php`;

                fetch(url, {
                    method: 'POST', 
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data == "Registering Failed") {
                            // if the php file returns a failure, try again
                            console.log("Registering Failed..");
                            return;
                        } else {
                            console.log('email sent! (not really because its not live but here is some of its content)');
                            alert("You've been added to the mailing list!");
                            console.log(data);
                        }
                    })
                .catch(function(error) {
                    console.error(error);
                });
            } else {
                console.log("fields cannot be blank");
            }
        }
    },
}