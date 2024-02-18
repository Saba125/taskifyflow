import ActionToolTip from "@/components/ActionToolTip";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { Board } from "@prisma/client";
import Link from "next/link";

interface BoardProps {
  board: Board;
}
const Board: React.FC<BoardProps> = ({ board }) => {
  const { orgId } = auth();
  console.log(board.color);
  return (
    <Link
      href={`/organization/${orgId}/board/${board.id}`}
      className="flex cursor-pointer  flex-col gap-3"
    >
      <div
        className={`w-[210px] bg-[#5964F8FF]  h-[114px] rounded-xl font-bold   p-2 flex items-center justify-center`}
      ></div>
      <p className=" text-black font-bold text-xl"> {board.name} </p>
    </Link>
  );
};

export default Board;
