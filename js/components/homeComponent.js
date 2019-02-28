export default {
    template: `
    <div>
    <section class="splash-img">
                <img src="images/bg-image.jpg" alt="shoes lookingdown at trees below">
                <p>Find Yourself at Home</p>
            </section>
            <section id="explore">
                <h2>EXPLORE</h2>
                <div class="circle-cont">
                    <div class="explore-circle">
                        <img src="images/algonquin.png" alt="">
                        <p>Algonquin</p>
                    </div>

                    <div class="explore-circle">
                        <img src="images/ottawa.png" alt="">
                        <p>Ottawa</p>
                    </div>

                    <div class="explore-circle">
                        <img src="images/toronto.png" alt="">
                        <p>Toronto</p>
                    </div>

                    <div class="explore-circle">
                        <img src="images/tobrmory.png" alt="">
                        <p>Tobermory</p>
                    </div>

                    <div class="explore-circle">
                        <img src="images/niagaraFalls.png" alt="">
                        <p>Niagara Falls</p>
                    </div>

                    <div class="explore-circle">
                        <img src="images/grandBend.png" alt="">
                        <p>Grand Bend</p>
                    </div>

                </div>
            </section>

        <section class="scene">
            <div class="clouds">
                <img src="images/clouds.png" alt="">
                <div class="text">
                    <h2>Discover</h2>
                    <p>Discover the landscapes and natural attractions that make this province so uniquely Ontario.</p>
                </div>
            </div>

            <div class="trees">
                <img src="images/trees.png" alt="">
                <div class="text">
                    <h2>Plan Ahead</h2>
                    <p>Sign up to our newsletters for exclusive deals and events to look forward to.</p>
                    <router-link :to="{path: 'register'}" >Get Notified</router-link>
                </div>
            </div>
        </section>

        <section class="video">
            <video controls preload="auto" playsinline>
                <source src="video/finalHackathonVid.mp4" type="video/mp4">
            </video>
        </section>

        <footer>
            <img src="images/footer.png" alt="">
            <p>&copy; 2019 Ontario Summer Tourism</p>
        </footer>
        </div>
    `,

    data() {
        return {
            
        }
    },

    created: function() {
        this.$parent.navTrue = false;
    },

    methods: {
        // login() {
        //     console.log("trying to log in");

        //     // check against our live account creds
        //     if (this.input.username != "" && this.input.password != "") {

        //         // create some form data to do a POST request
        //         let formData = new FormData();

        //         formData.append("username", this.input.username);
        //         formData.append("password", this.input.password);

        //         // do a fetch here and check creds on the back end
        //         let url = `./admin/admin_login.php`;

        //         fetch(url, {
        //             method: 'POST', 
        //             body: formData
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data == "Login Failed") {
        //                     // if the php file returns a failure, try again
        //                     console.log("authentication failed, try again");
        //                     return;
        //                 } else {
        //                     // if the back-end authentication works, then go to the users page
        //                     this.$emit("authenticated", true);
        //                     this.$router.replace({ name: "users" });
        //                 }
        //             })
        //         .catch(function(error) {
        //             console.error(error);
        //         });
        //     } else {
        //         console.log("username and password can't be blank");
        //     }
        // }
    }
}