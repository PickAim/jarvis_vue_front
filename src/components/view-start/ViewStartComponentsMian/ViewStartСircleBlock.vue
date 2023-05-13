<template>
    <main>
        <div class="circle-wrapper">
            <div class="circle-first"></div>
            <div class="circle-second"></div>
            <div class="circle-back"></div>
            <div class="circle-back-second"></div>
            <div class="circle-back-third"></div>
        </div>
    </main>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 45px;
    color: #FFFFFF;
}

.circle-wrapper {
    position: relative;
    top: -960px;
    left: 120px;
    .circle-first {
        height: 100px;
        width: 100px;
        border-radius: 100px;
        background-color: #B7FF44;
        position: relative;
        z-index: 0;
        top: -318px;
        left: 480px;
    }
    
    .circle-second {
        height: 285px;
        width: 285px;
        border-radius: 300px;
        background-color: #B7FF44;
        position: relative;
        z-index: 0;
        bottom: 1356px;
        right: 610px;
    }
    
    .circle-back {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #B7FF44;
        position: relative;
        z-index: 0;
        bottom: 1700px;
    }
    
    .circle-back-second {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #B7FF44;
        position: relative;
        z-index: 0;
        bottom: 1348px;
    }
    
    .circle-back-third {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #B7FF44;
        position: relative;
        z-index: 0;
        bottom: 998px;
    }
}

</style>