import Layout from "../../components/Admin/layout";
import TableS from "@components/Admin/SensorsContent/TabS";


const Sensors = () => {
    return (
        <>
        <Layout >
            <div className="mt-5 bg-w">
            <TableS/>
            </div>  
        </Layout>       
        </>

    );

}

export default Sensors;