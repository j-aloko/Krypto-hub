import "./App.css";
import Layer1 from "./Components/Layer1/Layer1";
import Layer2 from "./Components/Layer2/Layer2";
import Layer3 from "./Components/Layer3/Layer3";
import Layout from "./Components/Layout/Layout";
import styles from "./Styles/Global.module.css";

function App() {
  return (
    <Layout>
      <main className={styles.container}>
        <Layer1 />
        <Layer2 />
        <Layer3 />
      </main>
    </Layout>
  );
}

export default App;
