import { Route } from "next";
import Link from "next/link";

interface TextHighlightProps {
  text: string;
  textLink?: string;
}

const TextHighlight = ({ text, textLink }: TextHighlightProps) => {
  return (
    <span className="text-[12px] px-[4px] py-[1px] border border-border/30 rounded-[6px] bg-foreground/5 whitespace-nowrap">
      {textLink ? (
        <Link
          target="_blank"
          href={textLink as Route}
          className="text-primary hover:opacity-[.7] transition-all duration-300"
        >
          {text}
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export default TextHighlight;
