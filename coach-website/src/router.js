import Vue from 'vue'

import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage.vue'
import InstagramContainer from '@/components/InstagramContainer.vue'

Vue.use(Router)

const router= new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { path: '/', component: WelcomePage },
        { path: '/InstagramContainer', component: InstagramContainer}
    ]
})



export default router;

