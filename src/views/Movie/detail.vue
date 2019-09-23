<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <Loading v-if="isLoading" />
        <div v-else id="content" class="contentDetail">
             <div class="detail_list">
                <div class="detail_list_bg" :style="{'background-image':'url('+detailData.img.replace('w\.h','148.208')+')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailData.img | setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailData.nm}}</h2>
                        <p>{{detailData.enm}}</p>
                        <p>演员：{{detailData.star}}</p>
                        <p>评分：{{detailData.sc}}</p>
                        <p>{{detailData.cat}}</p>
                        <p>区域：{{detailData.src}}</p>
                        <p>{{detailData.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <h4>简介：</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{detailData.dra}}</p>
            </div>
            <div class="detail_player swiper-container" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="(item,index) in detailData.photos" :key="index">
                        <div>
                            <img :src="item | setWH('140.127')" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name : 'Detail',
        props:['movieId'],
        data(){
            return {
                detailData:{},
                isLoading: true
            }
        },
        components:{
            Header
        },
        methods:{
            handleToBack(){
                // this.$router.go(-1)
                this.$router.back()
            }
        },
        mounted(){
            // const id = this.$route.params.movieId  //这里不用$route.parmas取参,会使之与对应路由高度耦合
            // console.log(this.movieId)
            this.axios.get('/api/detailmovie?movieId=' + this.movieId).then(res=>{
                if(res.data.msg === 'ok'){
                    this.isLoading = false;
                    this.detailData = res.data.data.detailMovie;
                    this.$nextTick(()=>{
                        new Swiper(this.$refs.detail_player,{
                            slidesPerView: 4,//sliders容器能够同时显示的slides数量。设'auto'会根据容器container的宽度调整slides数目
                            freeMode: true,
                            freeModeSticky: false,
                            // loop: true,
                            // speed: 1000,
                            mode: 'vertical',
                            autoplay: {  // 运动缓慢
                                delay: 2000,
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }
                        })
                    })
                }
            });
        }
    }
</script>

<style scoped>
    #detailContrainer{ position: absolute; left:0; top:0; z-index: 100; width:100%; min-height:100%; background:white;}
    #detailContrainer.slide-enter-active{ animation:.3s slideMove;}
    @keyframes slideMove{
        0%{ transform : translateX(100%); }
        100%{ transform : translateX(0); }
    }
    #content.contentDetail{ display: block; margin-bottom:0;}
    #content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
    .detail_list .detail_list_bg{ width:100%; height:100%; background: 0 50%; filter:blur(5px); background-size:cover; position: absolute; left: 0; top: 0;}
    .detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
    .detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
    .detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
    .detail_list .detail_list_img img{ width:100%; height: 100%;}
    .detail_list .detail_list_info{ margin-top: 20px;}
    .detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
    .detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
    #content .detail_intro{font-size: 16px;padding: 10px; color:#555}
    #content .detail_player{ margin:20px;}
    .detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
    .detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
    .detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
</style>
