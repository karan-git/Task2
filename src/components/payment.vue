<template>
    <div class="details">
        <p class="title">Fill this form with your identity.</p>
        <div class="cardFields">
            <span>
                <label>Card Number</label>
                <input :class="{error: $v.cardNumber.$error}" type="number" v-model="cardNumber" @blur="$v.cardNumber.$touch()">
                <p class="error" v-if="$v.cardNumber.$error && !$v.cardNumber.minLength">{{lengthError}}</p>
                <p class="error" v-if="$v.cardNumber.$error && !$v.cardNumber.required">{{requiredMsg}}</p>
            </span>
            <span class="expire">
                <label>Expire</label>
                <input :class="{error: $v.expireDate.$error}" type="number" v-model="expireDate" @blur="$v.expireDate.$touch()">
                <p class="error" v-if="$v.expireDate.$error">Required</p>
            </span>
        </div>
        <div class="holderDetails">
            <span>
                <label>Name on Card</label>
                <input :class="{error: $v.holder.$error}" type="text" v-model="holder" @blur="$v.holder.$touch()">
                <p class="error" v-if="$v.holder.$error">{{requiredMsg}}</p>
            </span>
            <span class="code">
                <label>Code</label>
                <input :class="{error: $v.code.$error}" type="number" v-model="code" @blur="$v.code.$touch()">
                <p class="error" v-if="$v.code.$error">Required</p>
            </span>
        </div>
        <span class="securePay">
            <img src="https://image.flaticon.com/icons/svg/481/481195.svg" alt="">
            Secure Payment
        </span>
        <button @click="handleContinue">Pay with Credit Card</button>
    </div>
</template>

<script>
import {
    minLength,
    required
} from "../common"
export default {
    data() {
        return {
            cardNumber: "",
            expireDate: "",
            holder: "",
            code: "",
            lengthError: "The length of card number should be 16.",
            requiredMsg: "This field is required",
            minLengthErr: false
        }
    },
    validations() {
        return {
            cardNumber: {
                required,
                minLength: minLength(16)
            },
            expireDate: {
                required
            },
            holder: {
                required
            },
            code: {
                required
            }
        };
    },
    methods: {
        handleContinue() {
            if(this.cardNumber == ""){
                this.$v.cardNumber.$touch();
            }
            if(this.expireDate == ""){
                this.$v.expireDate.$touch();
            }
            if(this.holder == ""){
                this.$v.holder.$touch();
            }
            if(this.code == ""){
                this.$v.code.$touch();
            }
            if(!this.$v.cardNumber.$error && !this.$v.expiryDate.$error && !this.$v.holder.$error && !this.$v.code.$error){
                this.$router.push("/success")
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
        div[class="cardFields"]{
            display: flex;
            // justify-content: space-between;
            span{
                width: 70%;
            }
            span[class="expire"]{
                margin-left: 1em;
                width: 20%;
            }
        }
        div[class="holderDetails"]{
            display: flex;
            // justify-content: space-between;
            span{
                width: 70%;
            }
            span[class="code"]{
                margin-left: 1em;
                width: 20%;
            }
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
            border: .1em solid red !important;
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

        span[class="securePay"]{
            display: flex;
            align-content: center;
            margin-top: 1em;
            img{
                width: 1.2em;
                height: 1.2em;
                margin-right: .3em;
            }
        }
    }
</style>