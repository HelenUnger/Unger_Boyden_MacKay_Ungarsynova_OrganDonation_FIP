// components will go here
import homeComponent from './components/homeComponent.js';
import registerComponent from './components/registerComponent.js'; 

const routes = [
    { path: '/', name: "home", component: homeComponent },
    { path: "/register", name: "register", component: registerComponent }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    data: {
        navTrue: false,
        scroll: false,
    },

    created: function() {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        toggleNav(){
            this.navTrue = (!this.navTrue) ? true : false; 
        },

        handleScroll(){
            this.scroll = (pageYOffset > 50) ? true : false;
        },
    },

    router: router
    
}).$mount("#app");
