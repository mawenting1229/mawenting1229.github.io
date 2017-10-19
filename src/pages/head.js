import { React, Page } from 'zola'
import '../styles/head.css'

export default class Head extends Page {
  constructor(props){
      super(props)
      this.state = {
            mainTitle:[{
              title:"首页",
              link:"#/index"
            },{
              title:"博客",
              link:"#/list"
            },{
              title:"关于",
              link:"#/about"
            },{
              title:"",
              link:""
            },{
              title:"",
              link:""
            }]
      }
  }
  render () {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          {
            this.state.mainTitle.map((maintitleTtem,index)=>{
              if(index == this.props.currentIndex){
                  return <a key={index} href={maintitleTtem.link} className="active">{maintitleTtem.title}</a>
               }else{
                  return <a key={index} href={maintitleTtem.link}>{maintitleTtem.title}</a>
               }
            })
          }
        </nav>
        <h1><a href="#">七度🍎</a></h1>
      </div>
    )
  }
}