<template>
    <div class="details">
        <p class="title">Fill this form with your identity.</p>
        <label>Name</label>
        <input :class="{error: $v.name.$error}" type="text" v-model="name" @blur="$v.name.$touch()">
        <p class="error" v-if="$v.name.$error">{{requiredMsg}}</p>
        <label>Email</label>
        <input :class="{error: $v.email.$error}" type="text" v-model="email" @blur="$v.email.$touch()">
        <p class="error" v-if="$v.email.$error && !$v.email.required">{{requiredMsg}}</p>
        <p class="error" v-if="$v.email.$error && !$v.email.email">{{validEmailMsg}}</p>
        <p class="warning">The download link will be sent to this email.</p>
        <button @click="handleContinue">Continue</button>
    </div>
</template>

<script>
import {
    required,
    email
} from "../common"
export default {
    data() {
        return {
            name: "",
            email: "",
            requiredMsg: "This field is required",
            validEmailMsg: "Please enter a valid email address"
        }
    },
    validations() {
        return {
            name: {
                required
            },
            email: {
                required,
                email,
            },
        };
    },
    methods: {
        handleContinue() {
            if(this.name == ""){
                this.$v.name.$touch();
            }
            if(this.email == ""){
                this.$v.email.$touch();
            }
            if(!this.$v.name.$error && !this.$v.email.$error){
                this.$router.push("/payment")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    div[class="details"]{
        padding: 3em 2em;
        color: #CACACA;
        label{
            display: block;
             margin: 1em 0 .5em 0;
        }
        input{
            display: block;
            padding: .8em 1em;
            width: 90%;
            border: none;
            outline: none;
            border-radius: .3em;
            background:#EAEAED;
        }
        input[class="error"]{
            border: .1em solid red;
        }
        p[class="warning"]{
            font-size: .8em;
        }

        p[class="error"]{
            font-size: .7em;
            color: red;
        }

        button{
            border: none;
            outline: none;
            border-radius: .3em;
            padding: .7em 0;
            width: 98%;
            display: block;
            cursor: pointer;
            margin-top: 2em;
            font-weight: bold;
            font-size: 1.1em;
            color: #00795C;
            background: #41e8a8;
        }
    }
</style>