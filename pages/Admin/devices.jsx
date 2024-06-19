import Layout from "../../components/Admin/layout";
import TableD from "@components/Admin/DevicesContent/TableD";


const Devices = () => {
    return (
        <>
        <Layout >
            <div className="mt-5 bg-w">
            <TableD />
            </div>
            
        </Layout>   
        </>
    );

}

export default Devices;