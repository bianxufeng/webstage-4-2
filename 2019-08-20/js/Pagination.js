// 分页组件

Vue.component('Pagination', {
    props: ["page"],
    data() {
        return {
        }
    },
    computed: {
        pageList() {
            console.log(this.page);
            if (this.page === 1)  {
                return [1,2,3];
            } else if (this.page === 10) {
                return [8,9,10];
            } else {
                return [this.page-1, this.page, this.page +1];
            }
        }
    },
    template: `
    <div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li 
                    v-for="item in pageList"
                    :class="{
                        active: item===page
                    }"
                >
                    <a href="#">{{item}}</a>
                </li>
                <li>
                    <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>   
    </div> 
    `
})