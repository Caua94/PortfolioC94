import { createRouter, createWebHistory } from 'vue-router'
import sobreView from '../views/sobreView.vue'
import homeView from '../views/homeView.vue'
import metasView from "../views/metasView.vue"
import portifolioView from '../views/portifolioView.vue'
import personalView from '../views/personalView.vue'
import contactView from '../views/contactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/sobre",
      name: "sobre",
      component: sobreView,
    },
    {
      path: "/metas",
      name: "metas",
      component: metasView,
    },
    {
      path: "/portifolio",
      name: "portifolio",
      component: portifolioView,
    },

    {
      path: "/personal",
      name: "personal",
      component: personalView,
    },
    {
      path: "/contact",
      name: "contact",
      component: contactView,
    },
  ],
});

export default router
