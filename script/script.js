new Vue({
    el: "#app",
    data() {
        return {
            todos: [{ id:　Math.ceil(Math.random() * 1000), text: "sample", isDone: false},
                    { id:　Math.ceil(Math.random() * 1000), text: "sample2", isDone: true},
                    { id:　Math.ceil(Math.random() * 1000), text: "sample3", isDone: false}],
            text: '',
            isSelectedPage: [true, false]
        }
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            if (!this.text) {
                return;
            }
            const text = this.text;
            const id = Math.ceil(Math.random() * 1000);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        resetText() {
            this.text = '';
        },
        deleteTodo(id) {
            const index=this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        toggleIsDone(id) {
            const index=this.getIndexBy(id);
            this.todos[index].isDone = ! this.todos[index].isDone;
        },
        getIndexBy(id) {
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        },

        onPageChange: function(index) {
            this.setIsSelected(index);
        },
        goToIncompreted() {
            this.$refs.carousel.goToPage(0);
            this.setIsSelected(0);
        },
        goTocompreted() {
            this.$refs.carousel.goToPage(1);
            this.setIsSelected(1);
        },
        setIsSelected(page) {
            this.isSelectedPage.forEach((value, index) => {this.isSelectedPage.splice(index, 1, false)});
            this.isSelectedPage.splice(page, 1, true);
        },


    },
    computed: {
        doneTodo() {
            return this.todos.filter( todo => todo.isDone === true);
        },
        incompletedTodo() {
            return this.todos.filter( todo => todo.isDone != true);
        },
        getIsSelected(page) {
            return this.isSelected[page];

        }
    },
    components: {
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide
    }
      

});

