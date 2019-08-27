// Input组件
/**
 * 属性: type           String      text password textarea
 *       value          String      双向绑定
 *       size           String      输入框尺寸,可选值为large、small、default或者不设置
 *       placeholder    String
 *       disabled       Boolean
 *       rows           Number      textarea时行数
 * 事件: on-enter
 *       on-keydown
 */

Vue.component("Input", {
    props: {
        type: {
            validator(value) {
                if (value === 'text' || value === 'password' || value === 'textarea')
                    return true;
                else
                    return false;
            },
            default: 'text',
        },
        rows: {
            type: Number,
            default: 2
        },        
        value: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'defalut',
        },
        placeholder: {
            type: String,
            defalut: '',
        },
        disabled: {
            type: Boolean,
            defalut: false,
        },
    },
    data() {
        return {
            iValue: this.value,
        }
    },
    watch: {
        value(newValue) {
            this.iValue = newValue;
        }
    },
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.$emit("input",value);
        },
        handleKeydown(event) {
            this.$emit("on-keydown",event);
        },
        handleEnter(event) {
            this.$emit("on-enter",event);
        }
    },
    template: `
    <div>
        <template v-if="type==='textarea'">
            <textarea
                :rows="rows"
                :value="iValue"
                :placeholder = "placeholder"
                :disabled="disabled"
                @input="handleInput"
                @keydown="handleKeydown"
                @keydown.enter="handleEnter"
            />
        </template>
        <template v-else>   
            <input 
                :type="type"
                :value="iValue"
                :class="['input', {
                    'input-large': size === 'large',
                    'input-defalut': size === 'defalut',
                    'input-small': size === 'small',
                }]"     
                :placeholder = "placeholder"  
                :disabled="disabled"                         
                @input="handleInput"    
                @keydown="handleKeydown"    
                @keydown.enter="handleEnter"                        
            />
        </template>
    </div>
    `,
    mounted() {
        console.log(this);
    }
})