"use client";
import { useState } from "react";
import TaskItem from "@/components/TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <main className="max-w-2xl mx-auto px-6 pt-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
        <p className="text-zinc-500 mt-2">Manage your daily focus.</p>
      </header>

      <form onSubmit={addTask} className="flex gap-2 mb-10">
        <input 
          type="text" 
          className="input-field" 
          placeholder="What needs to be done?" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-primary">Add</button>
      </form>

      <div className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-center text-zinc-600 py-10">No tasks yet. Start by adding one above.</p>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              {...task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))
        )}
      </div>
    </main>
  );
}