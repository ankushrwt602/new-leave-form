import Layout from '../Component/layoutComponent';
import React from 'react'

function AdminEmployeeSection(){
    return(
        <>
        <Layout/>
        <section className='admin-employee-section'>
            <div className="container">
                <div className="inner-admin-employee-frame">
                    <div className="add-employye-btn">
                        <button>Add New Employee</button>
                    </div>
                    <div className="admin-employee-table">
                    <table>
                <tr>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Joined Date</th>
                  <th>Current Status</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Web Developer</td>
                  <td>23 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Web Developer</td>
                  <td>24 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Web Developer</td>
                  <td>25 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Web Developer</td>
                  <td>26 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Web Developer</td>
                  <td>26 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Web Developer</td>
                  <td>27 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
              </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AdminEmployeeSection;