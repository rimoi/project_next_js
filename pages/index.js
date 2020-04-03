import Head from 'next/head'
import Layout from "../components/Layout";
import Title from "../components/Title";

const Home = () => (
    <div className="container">
        <Head>
            <title>Easyblue: test frontend</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Layout>
            <Title text="Test frontend."/>
        </Layout>
    </div>
);

export default Home
