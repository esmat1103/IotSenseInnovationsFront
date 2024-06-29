import LayoutHome from "@components/Admin/layoutHome";
import ComplaintPage from "@components/Admin/ComplaintContent/complaint";
import { getTranslations } from '../../app/utils/getTranslations';


const Complaints = () => {
    return (
        <>
        <LayoutHome >
            
            <ComplaintPage />
            
        </LayoutHome>    
        </>
    );

}
export const getServerSideProps = async ({ locale }) => {
    const translations = await getTranslations(locale,['HeaderComplaintsTab','ComplaintsFilter','sidebar'])
    return {
        props: {
          ...translations,
        },
      };
    }
export default Complaints;