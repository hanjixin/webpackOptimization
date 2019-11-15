const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin');
const webpack = require('webpack')
module.exports = {
  mode:'development',
  entry: {
    react: ['react', 'react-dom'] 
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, 'DLL'),
    library: '_dll_[name]',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './DLL/react_manifest.json')
    }),
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, 'DLL', '[name]_manifest.json'),
    }),
  ]
} 