import Head from 'next/head'
import Layout from "../components/Layout";
import Title from "../components/Title";
import Header from "../components/Header";

const Home = () => (
    <div className="container">
        <Head>
            <title>Easyblue: test frontend</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
        </Head>

        <Layout>
            <Header />
            <Title text="Test frontend."/>
        </Layout>
    </div>
);

export default Home
