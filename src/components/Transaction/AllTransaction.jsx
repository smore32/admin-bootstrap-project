import React from "react";
import Main from "../Main/Main";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AllTransaction() {
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
                  All Transaction
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
                        <th>Transaction Id</th>
                        <th>Sender Name</th>
                        <th>Reciver Name</th>
                        <th>Amount</th>
                        <th>Transaction Status</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Sender Name</th>
                        <th>Reciver Name</th>
                        <th>Amount</th>
                        <th>Transaction Status</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>TD454554545</td>
                        <td>John Mackne</td>
                        <td>Tidoue Ruccele</td>
                        <td>$15477</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>TD454554545</td>
                        <td>John Mackne</td>
                        <td>Tidoue Ruccele</td>
                        <td>$15477</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>TD454554545</td>
                        <td>John Mackne</td>
                        <td>Tidoue Ruccele</td>
                        <td>$15477</td>
                        <td>Failed</td>
                      </tr>
                      <tr>
                        <td>TD454554545</td>
                        <td>John Mackne</td>
                        <td>Tidoue Ruccele</td>
                        <td>$15477</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>TD454554545</td>
                        <td>John Mackne</td>
                        <td>Tidoue Ruccele</td>
                        <td>$15477</td>
                        <td>Complete</td>
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
