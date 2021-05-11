import Head from '../src/components/head/Head';
import Layout from '../src/components/layout/Layout';
import Header from '../src/components/layout/Header';

export default function cursusAanbod() {
    return (
        <>
            <Head title="cursus aandbod" description="overzich over alle cursussen vam Willehad" />
            <Layout>
                <Header/>
            </Layout>
        </>
    )
}
