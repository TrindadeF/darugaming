"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LANGUAGE_MAP } from "@/lib/helper";
import { Button } from "./ui/button";
import { Flag } from "lucide-react";
import { useState } from "react";

export default function LanguageChanger() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: string) => {
    const newLocale = e;


    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;


    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="flex">
      <Button
        onClick={() => setOpen(!open)}
        className="rounded-l-none lg:rounded-l lg:rounded-r-none hover:cursor-pointer lg:h-[36px]"
      >
        <Flag />
      </Button>
      <Select open={open} onOpenChange={setOpen} onValueChange={handleChange}>
        <SelectTrigger className=" hidden lg:flex w-[180px] rounded-l-none">
          <SelectValue
            placeholder={LANGUAGE_MAP[currentLocale as "br" | "en"]}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Selecione sua localização</SelectLabel>
            <SelectItem value="br">Português</SelectItem>
            <SelectItem value="en">Inglês</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
