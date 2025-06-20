import { useEffect, useState } from "react";
import { actionListUsers } from "../../api/user";
import useAuthStore from "../../store/auth-store";

// rfce
function Manage() {
  // JS
  const token = useAuthStore((state) => state.token);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Manage;
