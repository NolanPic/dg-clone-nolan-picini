import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: "60px", textAlign: "center" }}>
        Disciple-Making in a Busy Season
      </h1>
      <div
        style={{
          maxWidth: "700px",
          margin: "4rem auto",
          lineHeight: "1.9",
          fontSize: "18px",
          letterSpacing: "0.02em",
          fontWeight: "300",
        }}
      >
        <p style={{ marginBottom: "22.4px" }}>
          I can remember a time when disciple-making sounded more doable. My
          days had more margin for late nights, spontaneous meals, and extended
          fellowship. Fewer responsibilities demanded my time. Discipling others
          in a life-on-life way didn’t sound easy, but it did sound more
          manageable than it does now.
        </p>
        <p>
          Businessman, husband, mother of young ones — you probably know what I
          mean. You used to say yes to nearly every invitation. You used to send
          those invitations. Now saying yes often means saying no to some part
          of life that seems nonnegotiable. And for as much as you’ve tried to
          invite others into your normal routines — aiming for overlap, not
          addition — the fact still stands: Discipling others is harder than it
          once was.
        </p>
      </div>
    </>
  );
}
