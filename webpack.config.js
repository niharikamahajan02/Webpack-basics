const path= require('path');


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

    //loaders
    devServer:{
       // hot: "only", // hot:true
        static: path.join(__dirname,'dist'),
        compress: true,
        port:3500
    }
}