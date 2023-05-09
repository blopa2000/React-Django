import { useForm } from "react-hook-form";
import { createTask, deleteTask, getTask, updatetasks } from "../api/tas.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export const TasksFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      (async () => {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      })();
    }
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatetasks(params.id, data);
      toastAlert("Updated Task");
    } else {
      await createTask(data);
      toastAlert("Created Task");
    }
    navigate("/tasks");
  });

  const deleteTaskID = async () => {
    await deleteTask(params.id);
    navigate("/tasks");
    toastAlert("deleted Task");
  };

  const toastAlert = (message) => {
    toast.success(message, {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>this filed is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>this filed is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button className="bg-red-500 p-3 rounded-lg w-48 mt-3 " onClick={deleteTaskID}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
