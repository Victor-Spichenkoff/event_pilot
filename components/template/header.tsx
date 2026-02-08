import Logo from "@/public/logo/logo_rounded.png"
import {Menu, User} from "lucide-react";
import Image from "next/image";

interface HeaderProps {
    title: string
    hideMenu?: boolean
    showLogo?: boolean
    hideProfile?: boolean
    onMenuToggle?: () => void
}

export const Header = ({
                           title,
                           hideMenu = false,
                           hideProfile = false,
                           onMenuToggle,
                           showLogo = false,
                       }: HeaderProps) => {
    return (
        <header className="w-full border-b bg-background">
            <div className="relative flex h-16 items-center px-4">
                {showLogo && (
                    <div className={"absolute left-4 hover:scale-105"}>
                        <Image src={Logo} alt="Logo"  width={40} height={40}/>
                    </div>
                )}
                {/* Botão menu lateral */}
                {!hideMenu && (
                    <div className="absolute left-4">
                        <button
                            onClick={onMenuToggle}
                            className={"btn-with-icon"}
                        >
                            <Menu size={25}/>
                        </button>
                    </div>
                )}

                <div className="mx-auto text-3xl font-bold text-foreground font-playfair">
                    {title}
                </div>

                {!hideProfile && (
                    <div className="absolute right-4">
                        <button
                            className={"btn-with-icon"}
                        >
                            <User size={25}/>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};
