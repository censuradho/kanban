import { Column } from "@/services/api/kamban/types";

export interface ColumnProps {
  data: Column
  taskAmount: number
  onMoveTaskCrossColumn?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onClickToAddTask?: () => void
}