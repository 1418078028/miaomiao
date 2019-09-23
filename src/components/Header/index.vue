<template>
    <header id="header">
        <h3>{{title}}</h3>
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name:'Header',
        props:{
            title:{
                type:String,
                default:'如花影院'
            }
        }
    }
</script>

<style scoped>
    #header{width:100%; height:50px; color: #fff; background: #44BB5C; border-bottom: 1px solid #44BB5C; position: relative;}
    #header h3{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
    #header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
