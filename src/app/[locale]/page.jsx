import { useTranslations } from "next-intl";

export default  function HomePage({params}){


    const t = useTranslations( "HomePage");
    return (
      <>
        <h2>{t("title")}</h2>
      </>
    );
}