// Switch组件
/**
 * 属性: value          String      双向绑定
 *       size           String      输入框尺寸,可选值为large、small、default或者不设置
 *       disabled       Boolean
 * 事件: on-change                  开关变化时触发，返回当前的状态
 */ 

Vue.component("Switcher", {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'default',
        },
        disabled: {
            type: Boolean,
            defalut: false,
        },        
    },
    data() {
        return {
            iValue: this.value
        }
    },
    watch: {
        value(newValue) {
            this.iValue = newValue;
        },
    },  
    template: `
    <div :class="['switch', {
        'switch-large': size === 'large',
        'switch-small': size === 'small',
        'switch-default': size === 'default',
        'switch-on': iValue
        }]"
        @click="change(iValue)"
    >
        <span class="switch-btn"></span>
    </div>
    `,
    methods: {
        change(oldValue) {
            if (this.disabled)
                return;
            this.iValue = !oldValue;
            this.$emit("input", this.iValue);
            this.$emit("on-change",this.iValue);
        }        
    }

})