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
        }
    }
}

Vue.createApp(toDoList).mount('#app');