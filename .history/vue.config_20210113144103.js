

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/' , //这个路径根据自己的情况定，默认就填"./",因为我静态资源的路径必须要在static文件夹下，所以才修改的。
    
}