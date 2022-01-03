const jf = require('jscodeshift')

module.exports = function (source) {
  try {
    const root = jf(source)
    root.find(jf.ExpressionStatement).forEach((path) => {
      // 查找是否为console的表达式
      const isConsole = jf(path)
        .find(jf.Identifier)
        .some((childPath) => {
          return childPath.node.name === 'console'
        })
      if (isConsole) {
        // 移除该表达式语句
        jf(path).remove()
      }
    })
    // 结果接入输入位置
    // this.emitFile(this.outputPath, root.toSource())
    // 返回结果
    console.log(root.toSource(), '结果')
    this.callback(null, root.toSource())
  } catch (e) {
    this.callback(e)
  }
}
