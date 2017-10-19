/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */
import articles from 'data/article'
import AsyncComponent from 'modules/AsyncComponent'
import Head from "./head.js"
import '../styles/list.css'
const articleList = MY_ARTICLE_DATA

import { React, Page } from 'zola'

export default class Index extends Page {
  render () {
  	const renderComp = 'input'
    return (
      <div className="main">
        <Head currentIndex="1"/>
      	<ul className="ls-list-wrapper">
      		{
		      	articleList.map((article,index) =>{
		      		return (
		      			<li key={index} className="ls-acticle-item">
		      				<a href={`#/article${article.path}`} className="ls-article-content">
		      				 <AsyncComponent comFn={articles[index].component()}/>
		      				</a>
                 <a href={`#/article${article.path}`} className="go-on-read">继续阅读全文 »</a>
		      			</li>
	      			)
		      	})
		      }
      	</ul>
      </div>
    )
  }
}