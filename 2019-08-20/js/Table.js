// 表格组件

Vue.component("Table", {
    props: ["column", "datas"],
    data() {
        return {
        }
    },
    template: `
    <div class="container" style="margin-top:10px">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th v-for="header in column">
                        {{header.title}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in datas">
                    <td v-for="header in column">
                        {{row[header.key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})