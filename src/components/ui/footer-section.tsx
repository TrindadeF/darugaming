"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Facebook, Instagram, Send, Twitter } from "lucide-react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { newsLetterSchema } from "@/schemas/news-letter"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"

function FooterSection() {
  const pathname = usePathname();
  const { t } = useTranslation('footer')
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof newsLetterSchema>) {
    console.log(values)
  }

  if (pathname.includes("signin") || pathname.includes("signup") || pathname.includes('admin')) return null;
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300 w-screen">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              {t('stayConnected.title')}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t('stayConnected.description')}
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('stayConnected.form.emailLabel')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('stayConnected.form.placeholder')}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t('stayConnected.form.emailDescription')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-[26px] h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">
                    {t('stayConnected.form.subscribe')}
                  </span>
                </Button>
              </form>
            </Form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t('quickLinks.title')}
            </h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                {t('quickLinks.links.home')}
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                {t('quickLinks.links.products')}
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                {t('quickLinks.links.account')}
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                {t('quickLinks.links.faq')}
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t('logoSection.title')}
            </h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{t('logoSection.addressLines.0')}</p>
              <p>{t('logoSection.addressLines.1')}</p>
              <p>{t('logoSection.addressLines.2')}</p>
              <p>{t('logoSection.addressLines.3')}</p>
              <p>{t('logoSection.addressLines.4')}</p>
              <p>{t('logoSection.addressLines.5')}</p>
              <p>{t('logoSection.addressLines.6')}</p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">
              {t('followUs.title')}
            </h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">{t('followUs.socials.facebook')}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('followUs.socials.facebook')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">{t('followUs.socials.twitter')}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('followUs.socials.twitter')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">{t('followUs.socials.instagram')}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('followUs.socials.instagram')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" >
                        <path fill="currentColor" color="currentColor" fillRule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z" />
                      </svg>
                      <span className="sr-only">{t('followUs.socials.whatsapp')}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('followUs.socials.whatsapp')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t('copyright', { year: format(new Date(), 'yyyy') })}
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              {t('footerLinks.privacy')}
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              {t('footerLinks.terms')}
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              {t('footerLinks.cookies')}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }