import { Board, Task } from "@prisma/client";
import { create } from "zustand";
export type ModalType = "edit-task" | "add-board" | "add-task";
interface ModalData {
  task?: Task;
  boardId?: string;
}
interface ModalProps {
  isOpen: boolean;
  data: ModalData;
  type: ModalType | null;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}
export const useModalHook = create<ModalProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false }),
}));
