"use client";

import styles from "./SubscribeForm.module.css";
import { useState } from "react";

export default function SubscribeForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    console.log("submitted!");
  };

  return (
    <form
      className={`${styles.subscribeForm} ${className}`}
      onSubmit={onSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
