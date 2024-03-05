import { ClassNameProp } from "@/lib/types/misc";
import styles from "../../styles/loader.module.css";
import clsx from "clsx";

const Loader = ({ className }: ClassNameProp) => {
  return (
    <div className={clsx(styles.loader, className)}>
      Loading..
      <span></span>
    </div>
  );
};

export default Loader;
