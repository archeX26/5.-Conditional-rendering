const app = Vue.createApp({
    data(){
        return{
            btnClicked: true,
            btnCaption: 'Hide',
            enteredTaskValue:'',
            tasks: [],
            
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        },
        clickedButton(){
            this.btnClicked = !this.btnClicked
            if(this.btnCaption === 'Hide'){
                this.btnCaption = 'Show List'
            }
            else{
                this.btnCaption = 'Hide'
            }

        }
    }




});
app.mount('#assignment');