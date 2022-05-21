import React from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../Shared/axiosPrivate/axiosPrivate";

const DeleteConfirmModal = ({setDeletedDoctor, deleteDoctor, refetch }) => {
  const { name, email } = deleteDoctor;
  const handleDelete = async (email) => {
    try {
      const url = `http://localhost:5000/doctor/${email}`;
      const { data } = await axiosPrivate.delete(url);
      if (data.deletedCount > 0) {
        toast.success(`Doctor: ${name} is deleted`, {
          id: "success",
        });
        refetch();
        setDeletedDoctor(null)
      } else {
        toast.error("No Delete", {
          id: "error",
        });
      }
    } catch (error) {
      toast.error(error.code, {
        id: "error",
      });
    }
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-confirm" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete {name}
          </h3>
          <p class="py-4 text-red-500">
            if you this delete you didn't return back..Be careful
          </p>
          <div class="modal-action">
            <button className="btn" onClick={() => handleDelete(email)}>
              delete
            </button>
            <label for="delete-confirm" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
