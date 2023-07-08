import Link from 'next/link';

const TheHeader = () => {
    return (
        <header classNmae="a-head">
            <Link href="/" >Home </Link>
            <Link href="/about" >About </Link>
            <Link href="/info">Info</Link>

            {/*<a href="/">HOME</a>*/}
            {/*<a href="/about">about</a>*/}
            {/*<a href="/info">Info</a>*/}
        </header>
    )
}

export {TheHeader};