"use server";

import { connectDB } from "@/lib/db";
import { Task, ITask } from "@/models/tasks";

export const getTasks = async () => {
  await connectDB();
  return await Task.find();
};

export const createTask = async (title: string, description: string, dueDate: string) => {
  await connectDB();
  const newTask = new Task({ title, description, dueDate, completed: false });
  await newTask.save();
};

export const updateTask = async (id: string, updatedData: Partial<ITask>) => {
  await connectDB();
  await Task.findByIdAndUpdate(id, updatedData);
};

export const deleteTask = async (id: string) => {
  await connectDB();
  await Task.findByIdAndDelete(id);
};

export const toggleComplete = async (id: string, completed: boolean) => {
  await connectDB();
  await Task.findByIdAndUpdate(id, { completed });
};
