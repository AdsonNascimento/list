list = []

const toDoList = {
    data() {
        return {
            list: window.list,
            newItem: {
                active: false
            }
        }
    },
    methods: {
        addItem: function() {
            if (this.newItem.item) {
                this.list.push(this.newItem);
                this.newItem = {
                    active: false
                };
            } else {
                alert('Preencha o campo antes de adicionar')
            }
        },
        removeItens: function() {
            list.length = 0;
         
            // for (let i = 0; i < list.length; i++) {

            // }
        }
    }
}

Vue.createApp(toDoList).mount('#app');