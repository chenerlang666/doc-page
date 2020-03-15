import React, {Component} from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitalkComment extends Component{
  componentDidMount(){
    var gitalk = new Gitalk({
      clientID: '5a14503d87feacefcfaf',
      clientSecret: '6f02557463dfcf00e673c53ff543896c8a25ed27',
      repo: 'home-page',  // 仓库名称
      owner: 'airine',      // 仓库作者
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