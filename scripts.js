list = [
    {
        item: "Aprender HTML, CSS e Javascript",
        active: false
    },
    {
        item: "Aprender o básico de Vue JS",
        active: false
    },
    {
        item: "Completar o desafio de Vue JS com excelência",
        active: false
    }
];

const toDoList = {
    data() {
        return {
            list: window.list,
            newItem: {}
        }
    },
    methods: {
        addItem: function() {
            if (this.newItem.item) {
                this.list.push(this.newItem);
                this.newItem = {};
            } else {
                alert('Preencha o campo antes de adicionar')
            }
        },
        removeItens: function() {
            
        }
    }
}

Vue.createApp(toDoList).mount('#app');