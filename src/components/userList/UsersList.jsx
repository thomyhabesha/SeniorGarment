import React from "react";
import './UsersList.css';

const UsersList = () => {
    return (
        <section className="container-section">
            <h3>Registered</h3>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
            <tr>
              <td>PR02</td>
              <td>Tamene Natneal</td>
              <td>natta22@gmail.com</td>
              <td>Production Manager</td>
              <td>0932912092</td>
            </tr>
            <tr>
              <td>IN120</td>
              <td>Tamene Natneal</td>
              <td>natta22@gmail.com</td>
              <td>Inventory Manager</td>
              <td>0922902072</td>
            </tr>
            <tr>
              <td>EM01</td>
              <td>Tamene Natneal</td>
              <td>natta22@gmail.com</td>
              <td>Employee</td>
              <td>0903091092</td>
            </tr>
            <tr>
              <td>EM02</td>
              <td>Tamene Natneal</td>
              <td>natta22@gmail.com</td>
              <td>Employee</td>
              <td>0912239900</td>
            </tr>

            <tr>
              <td>EM03</td>
              <td>kidus haile</td>
              <td>nkidh2@gmail.com</td>
              <td>Employee</td>
              <td>0912019900</td>
            </tr>

            <tr>
              <td>EM04</td>
              <td>nahom said</td>
              <td>saidna00@gmail.com</td>
              <td>Employee</td>
              <td>0911019700</td>
            </tr>

            <tr>
              <td>EM05</td>
              <td>helen telaun</td>
              <td>nkidh2@gmail.com</td>
              <td>Employee</td>
              <td>0912019900</td>
            </tr>

            <tr>
              <td>EM06</td>
              <td>nahom said</td>
              <td>saidna00@gmail.com</td>
              <td>Employee</td>
              <td>0911019700</td>
            </tr>
          </tbody>
                </table>
            </div>
        </section>
    );
};

export default UsersList;
