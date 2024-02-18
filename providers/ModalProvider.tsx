import AddBoardModal from "@/app/(platform)/(dashboard)/_components/Modal/Add-Board";
import AddTaskModal from "@/app/(platform)/(dashboard)/_components/Modal/Add-Task";
import Modal from "@/app/(platform)/(dashboard)/_components/Modal/Modal";

const ModalProvider = () => {
  return (
    <>
      <Modal />
      <AddBoardModal />
      <AddTaskModal />
    </>
  );
};

export default ModalProvider;
