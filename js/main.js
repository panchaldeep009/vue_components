(() => {
    // Components
    const liveuser = {
        props: ['first_name', 'last_name', 'role'],
        template: "#activeuser",
        methods: {
            logName(){
                console.log(this.$options.propsData.first_name);
            },
            shootEvent(){
            //    vm.logEVENTFunction();
               this.$emit('log-event'); 
            }
        },
        created: function() {
            console.log('Child is Live');
        },
    };
    const vm = new Vue({
        el: '#app',
        data: {
            message: 'sup for Vue',
        },
        methods: {
            logParent(message){
                console.log(" Form the Parent ", message);
            },
            logEVENTFunction(){
                console.log('EVENT TRIGGED');
            }
        },
        created: function() {
            console.log('Parents is Live');
        },
        components:{
            user: liveuser
        }
    })
})();