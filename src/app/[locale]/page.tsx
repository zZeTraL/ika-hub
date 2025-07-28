import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations("sidebar");
    return (
        <div className="font-hsr text-2xl">
            <h1>{t("home")}</h1>
        </div>
    );
}
