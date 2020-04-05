import Head from 'next/head'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Body from "../components/Body";

const Home = () => (
    <div className="container">
        <Head>
            <title>Easyblue: test frontend</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
        </Head>

        <Layout>
            <main>
                <Header />
                <Body />
            </main>
        </Layout>
    </div>
);

export default Home
