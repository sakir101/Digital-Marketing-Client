import { MenuProps } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
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

  const superAdminSidebarItems: MenuProps["items"] = [...defaultSidebarItems];

  if (role === "super_admin") {
    return superAdminSidebarItems;
  } else {
    return defaultSidebarItems;
  }
};
