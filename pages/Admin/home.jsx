import Profile from "../../components/Admin/profile";
import LayoutHome from "@components/Admin/layoutHome";
import { getTranslations } from '../../app/utils/getTranslations';
import React, {useState,useEffect} from "react";
const Home = (initialLanguage) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || initialLanguage;
        setLanguage(storedLanguage);
    }, []);

    return (
        <>
            <LayoutHome />
            <Profile />       
        </>

    );

}
export const getServerSideProps = async ({ locale }) => {
    const translations = await getTranslations(locale,['sidebar'])
    return {
        props: {
          ...translations,
        },
      };
    }
export default Home;

