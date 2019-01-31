(()=> {
    // create a component BEFORE the vue instance
    let HomeComponent = {
        props:[''],
        template:"#hometemplate",

        data: function(){
            return {

            }
        },

        methods: {
        }, 
    };

    let AboutComponent = {
        template:"#abouttemplate",
    };

    let ContactComponent = {
        template:"#contacttemplate",
    };

    const routes = [
        {path: '/', name: 'home', component: HomeComponent},
        {path: '/about', name: 'about', component: AboutComponent},
        {path: '/contact', name: 'contact', component: ContactComponent},
    ]

    const router = new VueRouter({
        routes
    });


    //then your vue instance

    const vm = new Vue({
        el: "#app",

        data: {
        },

        methods: {
        },

        created: function(){
            console.log('vm was created!');
        },

        components: {
            'homecomponent' : HomeComponent,
            'aboutcomponent' : AboutComponent,
            'contactcomponent' : ContactComponent,
        },

        router: router

    });

})();