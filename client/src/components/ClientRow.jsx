import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation";
import { Popconfirm, message } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GET_CLIENTS } from "../queries/clientQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    onCompleted: () => {
      toast.success("Client deleted successfully!");
    },
    onError: (error) => {
      toast.error(`Error deleting client: ${error.message}`);
    },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
      });
    },
  });

  const confirmDelete = () => {
    deleteClient();
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <Popconfirm
          title="Are you sure you want to delete this client?"
          onConfirm={confirmDelete}
          onCancel={() => message.info("Delete canceled")}
          okText="Yes"
          cancelText="No"
        >
          <button className="btn btn-danger btn-sm">
            <FaTrashAlt />
          </button>
        </Popconfirm>
      </td>
    </tr>
  );
};

ClientRow.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientRow;
