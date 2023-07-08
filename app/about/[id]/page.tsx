type Props = {
    params: {
        id: string;
    };
};

export default function Post({ params: { id } }: Props)  {
    return <h1>about 2 page id = {id}</h1>;
}