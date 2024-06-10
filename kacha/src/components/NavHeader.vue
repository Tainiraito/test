<template>
    <div class="nav-bar">
        <button>123</button>
        <a href="###">
            <img src="../assets/kacha.svg" alt="kacha" id="logo">
        </a>
        <button>123</button>
    </div>
</template>

<script>
export default {
    name:'NavHeader'
}
</script>

<style scoped>
.nav-bar{
    /* height: 80px; */
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex: none; */
}
#logo{
    height: 80px;
    margin: 12px;
}
button{
    margin: 0 40px;
}
</style>