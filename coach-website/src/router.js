import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Score from '@/components/Score.vue'
import Team from '@/components/Team.vue'
import History from '@/components/History.vue'
import Contact from '@/components/Contact.vue'
import CoachRules from '@/components/CoachRules.vue'

Vue.use(Router)

const router= new Router({



    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { path: '/', component: Home },        
        { path: '/Team', component: Team},
        { path: '/History', component: History},
        { path: '/Score', component: Score},
        { path: '/Contact', component: Contact},
        { path: '/CoachRules', component: CoachRules}
    ]
})

const DEFAULT_TITLE = 'TheBuisnesscoach';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;

