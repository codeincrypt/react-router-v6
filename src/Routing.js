import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRouter, MainRouter } from "./Routers";
import Layout from "./Layout";
import AdminLayout from "./AdminLayout";

const Navigation = () => {
  return (
    <>
      <Routes>
        {MainRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <Layout>
                <item.component />
              </Layout>
            }
          />
        ))}

        {AdminRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <AdminLayout>
                <item.component />
              </AdminLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
