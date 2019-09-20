<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <span @touchstart="handleCancel">{{cancel}}</span>
            <span @touchstart="handleOk">{{ok}}</span>
        </div>
    </div>
</template>

<script>
export default{
    name:'MessageBox'
}
</script>

<style scoped>
    .messageBox{
        width:200px;
        height:120px;
        background-color: #ffffff;
        position:absolute;
        left:50%;top:50%;
        margin:-60px 0 0 -100px;
        border:1px #ccc solid;
        border-radius:4px;
        box-shadow:3px 3px 3px 3px #ccc;
    }
    .messageBox h2{
        font-size: 18px;
        text-align: center;
        line-height: 30px;
    }
    .messageBox p{
        text-align: center;
        line-height: 40px;
    }
    .messageBox div{
        width:100%;
        display: flex;
        border-top:1px #ccc solid;
        font-size: 16px;
        position:absolute;
        bottom:0;
    }
    .messageBox div span{
        flex:1;
        text-align:center;
        border-right:1px solid #ccc;
        line-height: 30px;
    }
    .messageBox div span:last-child{
        border-right:none;
        background-color: lightblue;
    }
</style>
