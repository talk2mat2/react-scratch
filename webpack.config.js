const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    entry:"./src/index.js",

    output:{
        path:path.join(__dirname,"/dist"),
        filename:"js.bundule.js"
    },

    module: {
        // configuration regarding modules
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            // Conditions:
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, "src")
            ],
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            use: [
         
                {
                  loader: "babel-loader",
                 
                }
              ],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
        },
        resolve: {
            // options for resolving module requests
            // (does not apply to resolving of loaders)
            modules: ["node_modules",path.resolve(__dirname, "src")],
            // directories where to look for modules (in order)
            extensions: [".js", ".json", ".jsx", ".css"],
            // extensions that are used
          
       
          },
        plugins:[
            new HtmlWebpackPlugin({
                template:"./src/index.html"
            })
        ]
}