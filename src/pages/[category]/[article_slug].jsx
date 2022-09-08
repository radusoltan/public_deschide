import { useRouter } from 'next/router'
const Article = () => {
    const router = useRouter()
    console.log(router);
    return (
        <div>
            Article Page
        </div>
    );
}

export default Article;