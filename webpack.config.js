const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = process.env.NODE_ENV === "dev";

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})


let config = {
    entry: './client/App.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/ 
            },

            // POUR LOAD LES FICHIERS CSS ET LES METTRE DANS UN FICHIER.CSS AVEC AUTOPREFIXE ET MINIFIÉ
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { 
                                importLoaders: 1,
                                minimize: true,
                                root: 'http://localhost:8080/'
                            }
                        },
                        {
                            loader: 'postcss-loader', 
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                })
            },

            // POUR LOAD LES FICHIERS SCSS ET LES METTRE DANS UN FICHIER.CSS AVEC AUTOPREFIXE ET MINIFIÉ
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { 
                                importLoaders: 1,
                                minimize: true,
                                root: 'http://localhost:8080/'                                
                            }
                        },
                        {
                            loader: 'postcss-loader', 
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },

            {
                test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    // OPTIMISE LES IMAGES
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: !dev,
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 3,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            },

            {
                test: /\.svg$/,
                use: [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: 'react-svg-loader',
                    options: {
                        svgo: {
                            plugins: [{removeTitle: false}],
                            floatPrecision: 2
                        }
                    }
                }
                ]
            }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
}

module.exports = config