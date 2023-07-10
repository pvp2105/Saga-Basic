import { MainLayout } from "@/components/layout";
import * as React from "react";

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  return <div>Work Page</div>;
}

WorksPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};
