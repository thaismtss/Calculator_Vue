import Vue from "vue"
import App from './App'

new Vue ({
    render(CreateElement) {
        return CreateElement(App)
    }
}).$mount('#app')