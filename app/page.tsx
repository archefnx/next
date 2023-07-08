import Image from 'next/image'
import {useState, useEffect} from "react";

async function getData() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
}

export default async function  Home() {
    const posts = await getData()

  return (
    <main>
        <div className="container">
            {/*<div className="item item-1">1</div>*/}
            {/*<div className="item item-2">2</div>*/}
            {/*<div className="item item-3">3</div>*/}
            {/*<div className="item item-4">4</div>*/}
            {/*<div className="item item-5">5</div>*/}

            {posts.map((post:any) => (
                // <li key={post.id}>
                    <div className="item">{post.title}</div>
                // </li>
            ))}

        </div>
        <ul>
            {posts.map((post:any) => (
                <li key={post.id}>
                <a href="#">{post.title}</a>

                </li>
            ))}
        </ul>
    </main>
  )
}
