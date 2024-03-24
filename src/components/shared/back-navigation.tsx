"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { IoMdArrowBack } from "react-icons/io";

const BackNavigation = () => {
  const router = useRouter();
  return (
    <Button variant="secondary" size="icon" onClick={router.back}>
      <IoMdArrowBack className="w-[20px] h-[24px]" />
    </Button>
  );
};

export default BackNavigation;
