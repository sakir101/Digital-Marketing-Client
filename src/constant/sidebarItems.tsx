import { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  HeartOutlined,
  ProjectOutlined,
  TeamOutlined,
  FileDoneOutlined,
  RocketOutlined,
  MonitorOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <p className=" hover:text-white">Profile</p>,
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: (
            <Link
              className="hover:text-white"
              href={`/${role}/profile/account-profile`}
            >
              Account Profile
            </Link>
          ),
          key: `/${role}/profile/account-profile`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <p className=" hover:text-white">Product</p>,
      icon: <HeartOutlined />,
      key: "Product",
      children: [
        {
          label: (
            <Link className="hover:text-white" href={`/${role}/product/create`}>
              Create
            </Link>
          ),
          key: `/${role}/product/create`,
        },
        {
          label: (
            <Link className="hover:text-white" href={`/${role}/product/view`}>
              View
            </Link>
          ),
          key: `/${role}/product/view`,
        },
      ],
    },
    {
      label: <p className=" hover:text-white">Task</p>,
      icon: <HeartOutlined />,
      key: "Task",
      children: [
        {
          label: (
            <Link className="hover:text-white" href={`/${role}/task/create`}>
              Create
            </Link>
          ),
          key: `/${role}/task/create`,
        },
        {
          label: (
            <Link className="hover:text-white" href={`/${role}/task/view`}>
              View
            </Link>
          ),
          key: `/${role}/task/view`,
        },
      ],
    },
  ];

  if (role === "user") {
    return userSidebarItems;
  } else {
    return defaultSidebarItems;
  }
};
