<template>
    <div class="success">
        <img src="https://image.flaticon.com/icons/svg/447/447147.svg" alt="">
        <p class="congrats">Congrats!!</p> 
        <p class="txt">Your payment has been successfully done.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    div[class="success"]{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3em 0;
        img{
            width: 3em;
            height: 3em;
        }
        p[class="congrats"]{
            padding: 1.5em 0;
            font-size: 1.3em;
            font-weight: 600;
        }
        p[class="txt"]{
            text-decoration: underline;
        }
    }
</style>