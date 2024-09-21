import React from "react";
import Layout from "./layout";
import { useTranslations } from "next-intl";

interface HomePageProps {
  params: {
    locale: string;
  };
}

function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations("home");

  return (
    <Layout locale={locale}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">{t("welcome")}</h1>
        <p className="mt-4 text-lg">
          Manage your properties efficiently and effectively.
        </p>
      </div>
    </Layout>
  );
}

export default HomePage;
