import Layout from "../../components/Admin/layout";
import { useEffect, useState } from 'react';
import TableD from "@components/Admin/DevicesContent/TableD";

const Clients = ({ initialLanguage }) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || initialLanguage;
        setLanguage(storedLanguage);
    }, []);

    return (
        <>
            <Layout>
                <div className="mt-5 bg-w">
                    <TableD language={language} />
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const initialLanguage = 'English'; 
    return {
        props: {
            initialLanguage
        }
    };
}

export default Clients;
