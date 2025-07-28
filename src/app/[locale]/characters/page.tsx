import { getTranslations } from "next-intl/server";

// Metadata
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Numby.moe | Characters",
    description: "Your kind Numby asisstant for you.",
    alternates: {
        canonical: "https://numby.moe/characters",
    },
};

export default async function CharactersPage() {
    const t = await getTranslations("characters");

    return (
        <div className="flex w-full flex-col gap-8">
            <h1 className="text-4xl tracking-wide">{t("title")}</h1>
            <div>Sort by</div>
            <div>Element selector</div>
            <div></div>
        </div>
    );
}
