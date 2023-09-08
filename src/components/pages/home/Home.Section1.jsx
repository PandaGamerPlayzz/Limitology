import styles from './Home.Section1.module.css';

function Section1() {
  console.log(styles);

  return (
    <section id={styles["home-section1"]}>
      <img id={styles["home-section1-image1"]} alt="" src={"https://images.unsplash.com/photo-1693930270229-694fc4216a69?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400"} />
      <div id={styles["home-section1-image1-overlay"]}></div>
    </section>
  );
}

export default Section1;


// https://images.unsplash.com/photo-1688510760047-a78e0a375950?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400