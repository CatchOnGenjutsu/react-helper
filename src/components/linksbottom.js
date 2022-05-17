import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import {
  Link,
} from "react-router-dom";

function LinksBottom(links){
    return (
      <div className='bottom-links'>
        <Link className='bottom-link-element' to={`${links.prev.link}`}>&#8592;{`${links.prev.title}`} </Link>
        {/* <a className='bottom-link-element' onClick={()=>window.scrollTo(0, 0)}>&#8593; Наверх &#8593;</a>
        <Link className='bottom-link-element' to={`${links.next.link}`}>{links.next.title} &#8594;</Link> */}
      </div>
    )
}

export default ()=> <LinksBottom />