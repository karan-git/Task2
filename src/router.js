import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./components/mainPage.vue"
import Details from "./components/details.vue"
import Payment from "./components/payment.vue"
import Success from "./components/success.vue"

Vue.use(VueRouter)
const routes = [
    {
        path: "/",
        component: MainPage,
        redirect: "/details",

        children: [
            {
                path: "/details",
                component: Details
            },
            {
                path: "/payment",
                component: Payment
            },
            {
                path: "/success",
                component: Success
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;