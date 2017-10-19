/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import '../styles/home.css'

export default class Home extends Page {
  render () {
    return (
      <div className="home-main">
      	<div className="main-wrapper">
      		<h1 className="home-title">七度🍎的个人网站</h1>
      		<h2 className="home-title-little">Qi Du's Personal Website</h2>
      		<a className="main-entrance" href="#/index">Nice to meet you! <span>go » </span></a>
      		<div className="contact-info">Contact | mawentin@lianjia.com</div>
      	</div>
      </div>
    )
  }
}