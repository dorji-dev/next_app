import { ClassNameProp } from "@/lib/types/misc";
import styles from "../../styles/content-loader.module.css";
import clsx from "clsx";

const ContentLoader = ({ className }: ClassNameProp) => {
  return (
    <div className={clsx(styles.content_loader, className)}>
      Loading..
      <span></span>
    </div>
  );
};

export default ContentLoader;
