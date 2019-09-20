// 此页作为JS组件的集合页，例如：dialog组件，messageBox组件
import Vue from 'vue'
import MessageBox from './MessageBox'

export const messageBox = (function(){
    const defaults = {
        title:'',
        content:'',
        ok:'',
        cancel:'',
        handleOk:null,
        handleCancel:null
    }
    const MyComponent = Vue.extend(MessageBox)
    return function(opts){
        for(let attr in opts){
            defaults[attr] = opts[attr]
        }
        const vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title: defaults.title,
                content: defaults.content,
                ok: defaults.ok,
                cancel: defaults.cancel,
            },
            methods:{
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el)
                },
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})();
