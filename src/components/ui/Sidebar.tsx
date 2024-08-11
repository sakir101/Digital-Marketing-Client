"use client";

import { Layout, Menu, ConfigProvider } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";
import { USER_ROLE } from "@/constant/role";
import { getUserInfo } from "@/services/auth.service";
import sidebar from "./sidebar.module.css";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      className="z-50"
      style={{
        minHeight: "100vh",
        background: "white",
        color: "black",
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
      width={280}
    >
      <Menu
        style={{
          background: "white",
          color: "black",
          marginTop: 30,
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems("user")}
      />
    </Sider>
  );
};

export default Sidebar;
