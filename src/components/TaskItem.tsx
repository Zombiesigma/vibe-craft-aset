interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ id, text, completed, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-3">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => onToggle(id)}
          className="w-5 h-5 accent-white"
        />
        <span className={`${completed ? 'line-through text-zinc-500' : 'text-white'}`}>
          {text}
        </span>
      </div>
      <button 
        onClick={() => onDelete(id)}
        className="text-zinc-500 hover:text-red-500 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}