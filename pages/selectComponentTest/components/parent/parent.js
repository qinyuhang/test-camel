const app = getApp();

Component({
    properties: {
        
    },
    data: {
        
    },
    attached: function() {
        
    },
    methods: {
        goSelect: function(){
            var a = this.selectComponent("#children");
            console.log(a, ' selectComponent childre');
        }
    }
})