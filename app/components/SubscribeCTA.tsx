import styles from "./SubscribeCTA.module.css";
import SubscribeForm from "./common/SubscribeForm";
import Image from "next/image";

export default function SubscribeCTA() {
  return (
    <>
      <section className={styles.subscribeCTA}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1>New Resources in Your Inbox</h1>
            <p>A digest from Desiring God</p>
            <div className={styles.form}>
              <SubscribeForm />
            </div>
          </div>
          <div className={styles.phone}>
            <div className={styles.email}>
              <div className={styles.emailScroll}>
                <Image
                  src="/daily_email.jpg"
                  alt="Email"
                  width={314}
                  height={777}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
