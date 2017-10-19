/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */
import { React, Page } from 'zola'
import AsyncComponent from 'modules/AsyncComponent'
import ArticleRender from 'modules/ArticleRender'
import articles from 'data/article'
import Head from "./head.js"
import '../styles/about.css'

export default class About extends Page {
  render () {
    return (
      <div className="main">
        <Head currentIndex="2"/>
        <div className="ab-main">作者很懒，什么都没写，😄</div>
      </div>
    )
  }
}