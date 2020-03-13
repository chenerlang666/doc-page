import React, {Component} from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitalkComment extends Component{
  componentDidMount(){
    var gitalk = new Gitalk({
      clientID: 'ed6ebee4627e4d461d98',
      clientSecret: 'a1eaaa5038782e9a20cc716382b4b7119ba784e1',
      repo: 'SUSTech-CANStudio.github.io',  // 仓库名称
      owner: 'SUSTech-CANStudio',      // 仓库作者
      admin: ['airine'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    
    gitalk.render('gitalk-container')
  }
  render(){
    return <div id="gitalk-container"></div>
  }
}
export default GitalkComment;