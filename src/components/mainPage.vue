<template>
    <div class="payment">
        <div class="cards">
            <p class="title">Checkout</p>
            <ul>
                <li :class="{active: selected === tab.tab}" v-for="(tab, i) in tabs" :key="i" @click="handleLink(tab.tab)">
                    <img :src="tab.icon" alt="">
                    <span>{{tab.tab}}</span>
                </li>
            </ul>
            <router-view />
            <!-- <Details /> -->
        </div>
    </div>
</template>

<script>
// import Details from './details.vue'
export default {
    // components: {
    //     Details
    // },
    data() {
        return {
            tabs: [
                {icon: "https://image.flaticon.com/icons/svg/126/126486.svg", tab: "DETAILS"},
                {icon: "https://image.flaticon.com/icons/svg/633/633611.svg", tab: "PAYMENT"},
                {icon: "https://image.flaticon.com/icons/svg/447/447147.svg", tab: "SUCCESS"}
            ],
            selected: "DETAILS"
        }
    },

    watch: {
        "$route.path"() {
            if(this.$route.path === "/details"){
                this.selected = "DETAILS";
            }
            if(this.$route.path === "/payment"){
                this.selected = "PAYMENT";
            }
            if(this.$route.path === "/success"){
                this.selected = "SUCCESS";
            }
        }
    },

    methods: {
        handleLink(tab) {
            this.selected = tab;
            this.$router.push(`/${tab.toLowerCase()}`)
        }
    },

    mounted() {
        this.selected = this.$route.path.split("/")[1].toUpperCase();
    }
}
</script>

<style lang="scss" scoped>
    div[class="payment"]{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        vertical-align: middle;
        background: linear-gradient(45deg, #4e59f3, #6c46e8);
        padding: 1.2em;

        div[class="cards"]{
            background: white;
            border-radius: .5em;

            p[class="title"]{
                font-weight: bolder;
                font-size: 1.7em;
                padding: 1em 1.3em;
            }

            ul{
                display: flex;
                justify-content: space-around;
                list-style-type: none;
                border-top: .1em solid #CACACA;
                border-bottom: .1em solid #CACACA;
                li{
                    display: flex;
                    align-items: center;
                    padding: 1em 0;
                    cursor: pointer;
                    img{
                        width: 1em;
                        height: 1em;
                        color: #CACACA;
                    }
                    span{
                        padding-left: .4em;
                        font-size: 1em;
                        font-weight: bold;
                        color: #CACACA;
                    }
                }
                li[class="active"]{
                    span{
                        color: #4A63EE;
                    }
                }
            }
        }
    }
</style>    