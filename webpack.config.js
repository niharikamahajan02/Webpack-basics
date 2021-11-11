const path= require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports={
    mode:"development",
    entry:'./src/app.js',
    output : {
        path: path.resolve(__dirname,'dist'),
        filename:"output.js"
    },

    //loaders
    module:{
        rules:
        [
            {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin()
    ],

    //loaders
    devServer:{
       // hot: "only", // hot:true
        static: path.join(__dirname,'dist'),
        compress: true,
        port:3500
    }
}