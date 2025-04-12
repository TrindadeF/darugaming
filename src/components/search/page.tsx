'use client'

import {
    SearchBox,
    Hits,
    Pagination,
    Configure,
    RefinementList,
    connectMenu,
    connectNumericMenu
} from 'react-instantsearch-dom'

import { Card } from '../product/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Card as UICard, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

const CustomMenuRadio = connectMenu(({ items, refine }) => {
    const hasRefinement = items.some(item => item.isRefined)

    return (
        <RadioGroup
            value={hasRefinement ? items.find(item => item.isRefined)?.value : '__ALL__'}
            onValueChange={(value) => value === '__ALL__' ? refine(null) : refine(value)}
            className="space-y-2"
        >
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="__ALL__" id="all" />
                <Label htmlFor="all">Todos</Label>
            </div>
            {items.map(item => (
                <div key={item.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.value} id={item.value} />
                    <Label htmlFor={item.value}>
                        {item.label} ({item.count})
                    </Label>
                </div>
            ))}
        </RadioGroup>
    )
})

const CustomNumericRadio = connectNumericMenu(({ items, refine }) => (
    <RadioGroup
        value={items.find(item => item.isRefined)?.value || ''}
        onValueChange={(value) => refine(value)}
        className="space-y-2"
    >
        {items.map((item) => (
            <div key={item.value} className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={item.value} />
                <Label htmlFor={item.value}>{item.label}</Label>
            </div>
        ))}
    </RadioGroup>
))

function FilterSection({ title, attribute }: { title: string; attribute: string }) {
    return (
        <AccordionItem value={attribute}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>
                <CustomMenuRadio attribute={attribute} />
            </AccordionContent>
        </AccordionItem>
    )
}

function ProductHit({ hit }: { hit: any }) {
    return (
        <UICard className="h-full overflow-hidden hover:shadow-lg transition-shadow">
            <Card product={hit} />
        </UICard>
    )
}

export default function SearchPage() {
    return (
        <div className="flex flex-col md:flex-row px-4  py-6 gap-6">

            <div className="w-full md:w-72 space-y-6  clip-path-element">
                <UICard className="bg-[#41434B] top-6 overflow-hidden border-none text-white rounded-none">
                    <CardHeader>
                        <CardTitle className="text-lg">Filtros</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Accordion type="multiple" className="w-full">

                            <FilterSection title="Categoria" attribute="categoryId" />
                            <FilterSection title="Plataforma" attribute="platformId" />
                            <FilterSection title="Dispositivo" attribute="deviceId" />
                            <FilterSection title="Gênero" attribute="genreId" />

                            <AccordionItem value="price">
                                <AccordionTrigger>Faixa de Preço</AccordionTrigger>
                                <AccordionContent>
                                    <CustomNumericRadio
                                        attribute="finalAmount"
                                        items={[
                                            { label: 'Todos' },
                                            { label: 'Até R$50', start: 0, end: 50 },
                                            { label: 'R$50 - R$100', start: 50, end: 100 },
                                            { label: 'Acima de R$100', start: 100 },
                                        ]}
                                    />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="rating">
                                <AccordionTrigger>Avaliação</AccordionTrigger>
                                <AccordionContent>
                                    <CustomNumericRadio
                                        attribute="rating"
                                        items={[
                                            { label: 'Todos' },
                                            { label: '4 estrelas ou mais', start: 4 },
                                            { label: '5 estrelas', start: 5, end: 5 },
                                        ]}
                                    />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Separator />

                        <div className="space-y-4">
                            <RefinementList
                                attribute="isPreOrder"
                                transformItems={(items: any[]) => items.map(item => ({
                                    ...item,
                                    label: item.label.replace('true', 'Pré-venda').replace('false', 'Disponível')
                                }))}
                            />
                            <RefinementList
                                attribute="isTrending"
                                transformItems={(items: any[]) => items.map(item => ({
                                    ...item,
                                    label: item.label.replace('true', 'Em alta').replace('false', 'Comum')
                                }))}
                            />
                        </div>
                    </CardContent>
                </UICard>
            </div>

            <main className="flex-1">
                <div className="mb-6">
                    <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto">
                        <SearchBox
                            translations={{ placeholder: 'Pesquisar produtos...' }}
                            submit={<></>}
                            reset={<></>}
                            className="w-full "
                        />
                    </div>
                </div>

                <Configure hitsPerPage={12} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Hits hitComponent={ProductHit} />
                </div>

                <div className="mt-6 flex justify-center">
                    <Pagination
                        showLast={true}
                        className="space-x-2"
                    />
                </div>
            </main>
        </div>
    )
}