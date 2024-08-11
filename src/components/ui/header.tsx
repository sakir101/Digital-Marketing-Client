import { useState } from "react";
import { Avatar, Button, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constant/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <AntHeader
      style={{
        background: "white",
        color: "black",
        position: "relative", // For positioning the dropdown menu
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Space
          wrap
          size={16}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Space>

        {isDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              zIndex: 1000, // Ensure dropdown is above other content
            }}
            onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking outside
          >
            <Button
              onClick={logOut}
              type="text"
              danger
              style={{
                width: "100%",
                textAlign: "left",
                padding: "8px 16px",
                backgroundColor: "white",
                color: "red",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </Row>
    </AntHeader>
  );
};

export default Header;
