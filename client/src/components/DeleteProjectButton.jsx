import { useNavigate, useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";
import { Popconfirm, message } from "antd";

const DeleteProjectButton = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the project ID from the URL parameters

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    refetchQueries: [{ query: GET_PROJECTS }],
    onCompleted: () => {
      message.success("Project deleted successfully");
      navigate("/"); 
    },
    onError: (error) => {
      message.error(`Failed to delete project: ${error.message}`);
    },
  });

  const confirmDelete = () => {
    deleteProject();
  };

  return (
    <div className="d-flex mt-5 mx-auto">
      <Popconfirm
        title="Are you sure you want to delete this project?"
        onConfirm={confirmDelete}
        onCancel={() => message.info("Delete canceled")}
        okText="Yes"
        cancelText="No"
      >
        <button className="btn btn-danger btn-sm">
          <FaTrash />
          Delete Project
        </button>
      </Popconfirm>
    </div>
  );
};

export default DeleteProjectButton;
