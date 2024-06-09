"use client";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import logo from "../../../public/images/Tofail.png";
import Image from "next/image";
const { Sider } = Layout;

const items = [
  { path: "contact", icon: <UserOutlined />, label: "Contact" },
  { path: "books", icon: <VideoCameraOutlined />, label: "Books" },
  { path: "about", icon: <UploadOutlined />, label: "About" },
  { path: "projects", icon: <UserOutlined />, label: "Projects" },
  { path: "addSkills", icon: <VideoCameraOutlined />, label: "Add Skill" },
  { path: "addBlog", icon: <UploadOutlined />, label: "Add Blog" },
];

const AntdDrawer = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          minHeight: "100vh",
          position: "fixed",
          left: 0,
          zIndex: 1,
          
        }}
      
      >
            <Link href="/">
            <Image 
            // style={{margin:"16px 16px"}}
          className="flex justify-center my-4 items-center mx-auto "
          width={100}
          height={80}
          src={logo}
          alt="logo"
        />
            </Link>
        

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {items.map((item) => (
            <Menu.Item key={item.path} icon={item.icon}>
              <Link className="mx-auto" href={`/dashboard/${item.path}`}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="lg:ms-[200px] ms-0">
        <Layout.Content
          style={{
            // margin: "24px 16px 0",
            background: colorBgContainer,
            // borderRadius: borderRadiusLG,
            padding: 24,
            minHeight: "calc(100vh - 48px)",
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AntdDrawer;