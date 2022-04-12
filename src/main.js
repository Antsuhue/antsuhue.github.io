import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

router.beforeEach((to,from,next) => {

    let isAuth = localStorage.getItem("kipiai-token")

    console.log(to);

    if(to.name == "Not Found"){
        next()
    }

    switch(to.meta.auth){
        case false:
            if (isAuth == null){
                next()
            }else{
                next({ name:"dashboard"})
            }
            break
        case true:
            if (isAuth == null){
                next("/")
            }else{
                next()
            }
            break
    }

    switch(to.meta.admin){
        case false:
            next("/notauthorized")
            break
        case true:
            next()
            break
    }





})

createApp(App).use(router).mount('#app')
