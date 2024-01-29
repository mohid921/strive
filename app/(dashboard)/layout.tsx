import "aos/dist/aos.css";
import SideBar from "./_components/sidebar/sidebar";

import styles from "./layout.module.css";
import { AddUser, IIconProps } from "@/components/icons";

export type Links = {
  Icon: React.FC<IIconProps>;
  name: string;
  path?: string;
  dropdown?: {
    Icon: React.FC<IIconProps>;
    name: string;
    path: string;
  }[];
};

const Links: Links[] = [
  {
    Icon: AddUser,
    name: "Mentors",
    dropdown: [
      {
        Icon: AddUser,
        name: "Add Mentor",
        path: "/dashboard/add-mentor",
      },
      {
        Icon: AddUser,
        name: "Manage Mentors",
        path: "/dashboard/manage-mentors",
      },
    ],
  },

  {
    Icon: AddUser,
    name: "Manage Students",
    path: "/dashboard/manage-students",
  },
  {
    Icon: AddUser,
    name: "Manage Events",
    path: "/dashboard/manage-events",
  },

  {
    Icon: AddUser,
    name: "Write Blog/News",
    path: "/dashboard/write-blog",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar Links={Links} />
      <main className={styles.container}>
        <div>{children}</div>
      </main>
    </>
  );
}
