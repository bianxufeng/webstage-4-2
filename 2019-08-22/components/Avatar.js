// Avatar组件
/**
 * 属性: shape          String          可选circle、square
 *       size           Number String     
 *       src            String
 *       icon           String
 */

 Vue.component('Avatar', {
     props: {
        shape: {
            type: String,
            default: 'circle'
        },
        size: {
            type: [String,Number],
            default: 'default',
        },
        src: String,
        icon: String,
        color: {
            type: String,
            default: 'white'
        }
     },
     template: `
     <span
        :class = "['avatar', {
            circle: shape === 'circle',
            square: shape === 'square',
            default: size === 'default',
            large: size === 'large',
            small: size === 'small'
        }]"
        :style="{
            width: styleSize,
            height: styleSize,
            fontSize: styleSize,
            lineHeight: styleSize
        }"        
     >
        <Icon v-if="icon" :type="icon" :color='color'/>
        <img v-if="src" :src="src" />
     </span>
     `,
     computed: {
        styleSize() {
            if (typeof this.size === "number") {
                return this.size + "px";
            }
        },
     },
 })