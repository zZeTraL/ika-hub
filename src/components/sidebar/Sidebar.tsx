import Image from "next/image";

import { useTranslations } from "next-intl";

// Components
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
} from "../ui/sidebar";
import LocaleSwitcher from "./LocaleSwitcher";
import SidebarLink from "@/components/sidebar/SidebarLinks";
import BackgroundImage from "@/components/ui/shadcn/BackgroundImage";

// Static assets
import logo from "@/public/logo.svg";
import bottom from "@/public/ui/sidebar/bgIconsBottom.svg";
import top from "@/public/ui/sidebar/bgIconsTop.svg";
import flare from "@/public/ui/sidebar/flare.svg";

// Types and data
import { LinkType } from "@/types/link";
import { sidebarLinks } from "@/constants/links";

export default function AppSidebar() {
    const t = useTranslations("sidebar");

    return (
        <Sidebar>
            <BackgroundImage
                src={top}
                alt="top"
                width={256}
                height={256}
                priority={true}
                className="top-0 left-0 h-48 w-full opacity-3"
            />
            <BackgroundImage
                src={flare}
                alt="flare"
                width={256}
                height={256}
                priority={true}
                className="h-full w-full"
            />
            <BackgroundImage
                src={bottom}
                alt="bottom"
                width={256}
                height={256}
                priority={true}
                className="bottom-0 left-0 h-48 w-full opacity-3"
            />
            <SidebarHeader className="flex items-center justify-center">
                <Image
                    src={logo}
                    alt="Numby.moe"
                    priority={true}
                    className="w-56 pointer-events-none"
                />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebarLinks
                            .slice(0, 6)
                            .map((link: LinkType, index: number) => (
                                <SidebarLink props={link} key={index} />
                            ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("database")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebarLinks
                            .slice(6)
                            .map((link: LinkType, index: number) => (
                                <SidebarLink props={link} key={index} />
                            ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <LocaleSwitcher />
            </SidebarFooter>
        </Sidebar>
    );
}
