import styles from "@/styles/play-animation.module.css";
import clsx from "clsx";

interface PropsPlayAnimationProps {
  className?: string;
}

const PlayAnimation = ({ className }: PropsPlayAnimationProps) => {
  return (
    <div className={clsx(styles.now, styles.playing, className)}>
      <span className={clsx(styles.bar, styles.n1)}>A</span>
      <span className={clsx(styles.bar, styles.n2)}>B</span>
      <span className={clsx(styles.bar, styles.n3)}>c</span>
      <span className={clsx(styles.bar, styles.n4)}>D</span>
      <span className={clsx(styles.bar, styles.n5)}>E</span>
      <span className={clsx(styles.bar, styles.n6)}>F</span>
      <span className={clsx(styles.bar, styles.n7)}>G</span>
      <span className={clsx(styles.bar, styles.n8)}>H</span>
      <span className={clsx(styles.bar, styles.n1)}>A</span>
      <span className={clsx(styles.bar, styles.n2)}>B</span>
      <span className={clsx(styles.bar, styles.n3)}>c</span>
      <span className={clsx(styles.bar, styles.n4)}>D</span>
      <span className={clsx(styles.bar, styles.n5)}>E</span>
      <span className={clsx(styles.bar, styles.n6)}>F</span>
      <span className={clsx(styles.bar, styles.n7)}>G</span>
      <span className={clsx(styles.bar, styles.n8)}>H</span>
    </div>
  );
};

export default PlayAnimation;
