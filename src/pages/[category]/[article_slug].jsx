import { useRouter } from 'next/router'
import AppLayout from '../../components/Layouts/AppLayout';
const Article = () => {
    const router = useRouter()
    console.log(router);
    return (
        <AppLayout>
            Article Page
        </AppLayout>
    );
}

export default Article;