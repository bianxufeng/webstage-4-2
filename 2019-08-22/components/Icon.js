// Icon组件
/**
 * 属性: type           String      图标类型名称
 *       size           Number String      
 *       color          String
 * 事件: click
 */

 Vue.component('Icon', {
     props: {
        type: String,
        size: {
            type: [Number,String],
            default: 16,
        },
        color: String
     },
     template: `
        <i
            :class = "['iconfont', iconName]"
            :style = "{
                fontSize,
                color
            }"
            @click="handleClick"
        />
     `,
     computed: {
        iconName() {
            if (this.type) {
                return "icon-" + this.type;
            } else {
                return "";
            }
        },      
        fontSize() {
            return this.size + "px";
        }           
     },
     methods: {
        handleClick(event) {
            this.$emit('click',event);
        }
     }
 })