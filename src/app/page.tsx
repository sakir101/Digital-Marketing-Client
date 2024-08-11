import AllComponent from "@/components/Home/AllComponet";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing | Home",
};

export default async function Home() {
  return (
    <div>
      <AllComponent />
    </div>
  );
}
