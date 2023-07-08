async function getData() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
}

const Posts = () => {
    const posts = getData()
    return (
        <div className="container">


            {posts.map((post:any) => (
                // <li key={post.id}>
                <div className="item">{post.title}</div>
                // </li>
            ))}

        </div>
    )
}

export {Posts};