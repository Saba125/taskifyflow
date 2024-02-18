import { db } from "@/lib/db";
import AddTask from "../../../_components/AddTask";
import Task from "../../../_components/Task";
interface BoardPageProps {
  params: {
    boardId: string;
  };
}
const BoardPage = async ({ params: { boardId } }: BoardPageProps) => {
  const tasks = await db.task.findMany({
    where: {
      boardId: boardId,
    },
  });

  return (
    <div>
      <h3 className="font-bold text-2xl">All tasks</h3>
      <div className="flex-row-reverse flex mt-5 flex-wrap   gap-3">
        <div className="flex flex-wrap flex-row gap-5">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
          <AddTask boardId={boardId} />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
