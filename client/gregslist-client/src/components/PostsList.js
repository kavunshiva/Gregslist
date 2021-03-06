import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'

export default function PostsList(props){
  return(
    <div>
      <div className='container'>
        <div className='flex-row row'>
          <div className='col-sm-12'>
            <div className='row'>
              {props.posts.map(post => <div className='col-sm-3'><Link to={`/posts/${post.id}`}><img className='img-thumbnail' src={post.img_url}/></Link></div>)}
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
        </div>
          <div className='col-md-2'>
            <Link className="btn btn-primary" to='/posts/new'>New Post</Link>
          </div>
          <div className='col-md-5'>
        </div>
      </div>
    </div>
  )
}
