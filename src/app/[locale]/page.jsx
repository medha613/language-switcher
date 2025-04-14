import { useTranslations } from "next-intl";

export default  function HomePage({params}){


    const t = useTranslations( "HomePage");
    return (
      <>
        <h4>{t("title")}</h4>
      </>
    );
}