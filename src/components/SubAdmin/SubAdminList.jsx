import React from "react";
import Main from "../Main/Main";

export default function SubAdminList() {
  return (
    <>
      <div>
        <Main>
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            {/* <h1 className="h3 mb-2 text-gray-800">Sub Admin</h1> */}
            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Sub Admin List
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Date/Time</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Date/Time</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>John Maxan</td>
                        <td>Sub Admin</td>
                        <td>john@test.com</td>
                        <td>1254545</td>
                        <td>08/05/2006 03:05:15 PM</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>garrat@test.com</td>
                        <td>454563</td>
                        <td>08/05/2006 03:05:15 PM</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>garrat@test.com</td>
                        <td>454563</td>
                        <td>08/05/2006 03:05:15 PM</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>garrat@test.com</td>
                        <td>454563</td>
                        <td>08/05/2006 03:05:15 PM</td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>garrat@test.com</td>
                        <td>454563</td>
                        <td>08/05/2006 03:05:15 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </Main>
      </div>
    </>
  );
}
