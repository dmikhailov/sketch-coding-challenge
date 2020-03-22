import { useRouter } from 'next/router'

const Document = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <p>Document page {id}</p>
        </div>
    );
};

export default Document;