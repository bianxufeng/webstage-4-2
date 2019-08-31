// Slider组件
Vue.component('Slider', {
    props: {
        range: {
            type: Number,
            default: 1,
        }
    },
    data() {
        return {
            iRange: this.range
        }
    },
    watch: {
        range(newValue) {
            this.iRange = newValue;
        },
        iRange(newValue) {
            this.$emit('update:range', parseInt(newValue));
        }
    },
    template: `
        <input type='range' v-sync='iRange' />
    `,
    directives: {
        sync: {
            bind(el, binding, vnode) {
                    el.value = binding.value
                    el.addEventListener("input", () => {
                        if (vnode.context[binding.expression]) {
                            vnode.context[binding.expression] = event.target.value
                        }
                    })
            }
        },
        update(el, binding, vnode, oldVNode) {
            el.value = binding.value
        },        
    }
})