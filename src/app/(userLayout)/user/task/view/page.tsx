"use client";

import { useDeleteTaskMutation, useGetTaskQuery } from "@/redux/api/taskApi";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import React, { useState } from "react";

const ViewTask = () => {
  const query: Record<string, any> = {};

  const { userId } = getUserInfo() as any;

  const { data, isLoading, refetch } = useGetTaskQuery(
    {
      id: userId,
      arg: query,
    },
    { refetchOnMountOrArgChange: true }
  );

  const TaskData = data?.task;
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = async () => {
    if (selectedTask) {
      await deleteTask({ id: selectedTask });
      refetch();
      setSelectedTask(null);
    }
  };

  return (
    <div className="flex justify-center items-center w-full flex-wrap">
      {TaskData?.map((Task: any) => (
        <div key={Task.id} className="card w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{Task.title}</h2>
            <p className="text-gray-600 mb-2">Price: ${Task.desc}</p>
            <div className="flex justify-between">
              <Link href={`/user/task/update/${Task?.id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
              <button
                className="btn btn-error"
                onClick={() => setSelectedTask(Task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p className="mb-4">Are you sure you want to delete this Task?</p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setSelectedTask(null)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTask;
