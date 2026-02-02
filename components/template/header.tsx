import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu, User} from "lucide-react";

interface HeaderProps {
    title: string
    hideMenu?: boolean
    hideProfile?: boolean
    onMenuToggle?: () => void
}

export const Header = ({
                           title,
                           hideMenu = false,
                           hideProfile = false,
                           onMenuToggle
                       }: HeaderProps) => {
    return (
        <header className="w-full border-b bg-background">
            <div className="relative flex h-16 items-center px-4">
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

                {/* Título central */}
                <div className="mx-auto text-3xl font-bold text-foreground">
                    {title}
                </div>

                {/* Botão perfil */}
                {!hideProfile && (
                    <div className="absolute right-4">
                            <button
                                className={"btn-with-icon"}
                            >
                                <User size={25} />
                            </button>
                    </div>
                )}
            </div>
        </header>
    );
};
