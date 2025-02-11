import styles from "@/styles/heading.module.scss";

type HeadingProps = { h1: string; text: string };

export function Heading({ h1, text }: HeadingProps) {
  return (
    <>
      <h1 className={styles.h1}>{h1}</h1>
      <p className={styles.text}>{text}</p>
    </>
  );
}
