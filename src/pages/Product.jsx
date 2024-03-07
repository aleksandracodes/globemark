import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About GlobeMark.</h2>
          <p>
            At GlobeMark, our enthusiasm lies in discovering the world and
            forging enduring memories. Our venture started with a
            straightforward concept: aiding fellow travelers, such as yourself,
            in forming meaningful connections with the destinations you explore
            and the experiences you encounter.
          </p>
        </div>
      </section>
    </main>
  );
}
