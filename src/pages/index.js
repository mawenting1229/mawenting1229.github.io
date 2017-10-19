/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import '../styles/index.css'
import  Home from "./head.js"
import articles from 'data/article'
import AsyncComponent from 'modules/AsyncComponent'
const articleList = MY_ARTICLE_DATA

export default class Index extends Page {
  render () {
    return (
      <div className="main">
      	<Home currentIndex="0"/>
      	<div className="right-content">
      		<dl className="other-info">
      			<dd>
      				<h3>文章推荐</h3>
      				<ul className="index-rt-list">
      					<li><a href="http://www.jqhtml.com/category/tutorial" target="_blank">» Hello Girl</a></li>
      					<li><a href="http://www.jqhtml.com/7505.html" target="_blank">» webpack2.2 中文文档</a></li>
      					<li><a href="http://www.jianshu.com/p/a64735eb0e2b" target="_blank">» 彻底解决 webpack 打包文件体积过大</a></li>
      				</ul>
      			</dd>
      			<dd>
      				<h3>作者</h3>
      				<ul className="index-rt-list">
      					<li>个人简介：<a href="#/about">去这里</a></li>
      					<li>文章：{articleList.length}篇</li>
      					<li>爱好：前端、跑步、台球</li>
      				</ul>
      			</dd>
      		</dl>
      	</div>
      	<dl className="content-list">
      		<dd className="content-wrapper">
      			<h2>最新文章概览</h2>
      			<div className="newest-scan"><AsyncComponent comFn={articles[0].component()}/></div>
      			<a href={`#/article${articleList[0].path}`} className="go-on-read">继续阅读全文 »</a>
      		</dd>
      		<dd className="content-wrapper">
      			<h2>最新博客</h2>
      			<ul className="index-article-list">
	      			{
			      	articleList.map((article,index) =>{
			      		return (
			      			<li key={index}>
			      				<a href={`#/article${article.path}`}>
			      				» {article.title}
			      				</a>
			      			</li>
		      			)
			      	})
			      }
      			</ul>
      		</dd>
      	</dl>
      </div>
    )
  }
}