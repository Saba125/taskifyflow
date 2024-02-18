import AddWork from "../_components/AddWork";
import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import Board from "../_components/Board";
const OrganizationPage = async () => {
  const { orgId } = auth();

  const boards = await db.board.findMany({
    where: {
      organizationId: orgId as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <h3 className="font-bold text-3xl">My work</h3>
      <div>
        <div className="flex flex-wrap mt-5  flex-row gap-3">
          <div>
            <AddWork />
            <p className="mt-3 text-xl font-bold">Add work</p>
          </div>
          {boards.map((board) => (
            <Board key={board.id} board={board} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
