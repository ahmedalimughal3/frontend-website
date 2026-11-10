import DashboardView from "@/components/dashboard-view";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Agency dashboard | Frontdesk",
  description:
    "Explore the Frontdesk agency dashboard with sample client and lead data.",
};

export default function DashboardPage() {
  return (
    <>
      <SiteHeader dashboard />
      <DashboardView />
      <SiteFooter dashboard />
    </>
  );
}
