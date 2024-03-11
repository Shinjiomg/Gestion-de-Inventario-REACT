// app/components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunIcon } from "../../assets/icons/SunIcon"


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    return (
        <Switch
            defaultSelected={theme === 'light'}
            size="lg"
            onClick={toggleTheme}
            color="warning"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        />
    )
}
