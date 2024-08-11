
import { IMeta, ITask } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


const Task_URL = "/task"
export const TaskApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        TaskCreate: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `${Task_URL}/${id}/create-task`,
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.task],
        }),

        getTask: build.query({
            query: ({ id, arg }: { id: any, arg: Record<string, any> }) => {
                return {
                    url: `${Task_URL}/${id}/get-all`,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response: ITask[], meta: IMeta) => {
                return {
                    task: response,
                    meta,
                };
            },
            providesTags: [tagTypes.task]
        }),

        getSingleTask: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${Task_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.task],
        }),

        updateTask: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `${Task_URL}/${id}/update-task`,
                method: 'PATCH',
                data
            }),
            invalidatesTags: [tagTypes.task],
        }),

        deleteTask: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `${Task_URL}/${id}/delete-task`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagTypes.task],
        }),
    }),
})

export const {
    useGetTaskQuery,
    useGetSingleTaskQuery,
    useTaskCreateMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = TaskApi