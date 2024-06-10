<template>
    <div class="panel">
        <el-image
            :src="imgUrl"
            :fit="fit"
            :preview-src-list="srcList"/>
        <div class="description-area">
            <div class="text-area">
                <h3 v-if="title">{{title}}</h3>
                <p v-if="description">{{ description }}</p>
                <!-- 如果没有描述 -->
                <el-skeleton v-else :rows="6" animated />
            </div>
            <div class="button-gourp">
                <div>
                    <div class="tip">下载数：{{ countDownload }}</div>
                    <el-button id="btn-download" type="plain" icon="el-icon-download" @click="handleDownload">下载</el-button>
                </div>
                <div>
                    <div class="tip">点赞数：{{ countLike }}</div>
                    <el-button id="btn-like" type="primary" icon="el-icon-check" @click="handleLike">点赞</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FlowPanel',
    data() {
        return {
            title:'标题标题',
            description:'标签是默认是自动换行的p 标签内的内容没有换行，导致布局错乱，于是尝试着使用换行样式，虽然解决了问题，但是并没有发现本质原因，本质在于，我当时获取的数据是一长串的数字，浏览器应该是对数字和英文单词处理方式相近，不会截断。标签是默认是自动换行的，因此设置好宽度之后，能够较好的实现效果，但是最近的项目中发现，使用 ajax 加载数据之后，p 标签内的内容没有换行，导致布局错乱，于是尝试着使用换行样式，虽然解决了问题，但是并没有发现本质原因，本质在于，我当时获取的数据是一长串的数字，浏览器应该是对数字和英文单词处理方式相近，不会截断。',
            imgUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            fit:'fill',
            srcList:[
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            ],
            countDownload:0,
            countLike:0,
        }
    },
    methods:{
        handleLike(){
            this.countLike++;
        },
        handleDownload(){
            this.countDownload++;
        }
    }
}
</script>

<style scoped>
.panel{
    background-color: #fff;
    display: flex;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.10) ;
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 24px;
}
div.el-image{
    width: 640px;
    height: 360px;
    border-radius: 4px;
    margin-right: 24px;
}
h3{
    font-size: 20px;
    color: #333;
    margin-bottom: 12px;
}
.description-area{
    width: 240px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.text-area{
    display: flex;
    flex-direction: column;
    flex: auto;
}
.button-gourp{
    display: flex;
}
.button-gourp div{
    display: flex;
    flex-direction: column;
    flex: 1;
    /* align-items: center; */
}
button{
    flex: 1;
}
#btn-download{
    border-radius: 4px 0 0 4px;
}
#btn-like{
    border-radius: 0 4px 4px 0;
}
p{
    font-size: 14px;
    line-height: 22px;
    overflow: auto;
    margin-right: -20px;
    padding-right: 12px;
    margin-bottom: 12px;
    flex: auto;
    height: 200px;
}
.tip{
    text-align: center;
    font-size: 12px;
    margin-bottom: 4px;
    color: #999;
}
</style>