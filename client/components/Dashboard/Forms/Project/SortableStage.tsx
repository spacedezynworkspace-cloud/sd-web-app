'use client';

import { Checkbox } from '@heroui/react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  stage: {
    name: string;
    completed: boolean;
  };

  onToggle: (stageName: string, checked: boolean) => void;
};

export default function SortableStage({ stage, onToggle }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: stage.name,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between gap-2   bg-gray-100 p-2 rounded-lg"
    >
      <Checkbox
        isSelected={stage.completed}
        onValueChange={(checked) => onToggle(stage.name, checked)}
        color="warning"
      >
        <span className="dark:text-black">{stage.name}</span>
      </Checkbox>
      <span {...attributes} {...listeners} className="cursor-grab">
        ☰
      </span>
    </div>
  );
}
