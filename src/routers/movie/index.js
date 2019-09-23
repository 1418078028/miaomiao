export default{
    path:'/movie',
    component : () =>import('@/views/Movie'),
    children : [
        {
            path:'city',
            component : () =>import('@/components/City')
        },
        {
            path:'nowPlaying',
            component: () =>import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component: () =>import('@/components/ComingSoon')
        },
        {
            path:'search',
            component: () =>import('@/components/Search')
        },
        {
            path:'detail/1/:movieId',
            components:{  //注意是components，可能有多个命名视图，
                detail:()=>import('@/views/Movie/detail'),  //detail代表detail.vue的导出名字
                default:()=>import('@/components/NowPlaying')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{  //注意是components，可能有多个命名视图，
                detail:()=>import('@/views/Movie/detail'),  //detail代表detail.vue的导出名字
                default:()=>import('@/components/ComingSoon')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}

