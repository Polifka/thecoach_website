import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Team from '@/components/Team.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

const router= new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { path: '/', component: Home },
        { path: '/Team', component: Team},
        { path: '/Contact', component: Contact}
    ]
})

export default router;

