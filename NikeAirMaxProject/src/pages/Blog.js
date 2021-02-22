import React, { useState } from 'react'
import { ArticleDetail } from "./ArticleDetail";
import { Link, Route } from 'react-router-dom'
import { nikeAir } from "../data";


function Blog({ data }) {
    const [state, setState] = useState({
        post: {}
    })


    const fetchSingle = async (id) => {
        let res = nikeAir[id]
        let data = await res;
        // console.log(data)
        setState({
            post: data
        })
    }

    return (
        <div>
            <div className="blog">
                {data.map((item, i) => {
                    return (
                        <div className="blogItem">
                            <Link
                                className="link"
                                onClick={() => fetchSingle(item.id)}
                                key={i}
                                to={`/blog/${item.name}`}
                                style={{ 'display': 'block' }}>
                                <img className="pin" src={`/image/img${(item.id) + 1}.jpg`} alt="hi"></img>
                                {(item.name).slice(0, 13)}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <Route path='/blog/:id' render={() => <ArticleDetail single={state.post} />} />
        </div>
    )
}

export default Blog
