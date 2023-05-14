import Head from 'next/head';
import { Form, Input, Button, Breadcrumb, Row, Col, Select } from 'antd';
import styles from '../styles/Home.module.css';
import Password from 'antd/es/input/Password';




export default function Home({ session }) {
  if (!session) {
    console.log('no session');
  } else {
    console.log('has session');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Restricted Access</title>
      </Head>
      <main>
        <Form ref={'auth'}>
          <Row>
            <Input name={user} />
            <Password />
          </Row>
        </Form>
        <code>...</code>
      </main>
    </div>
  );
}
