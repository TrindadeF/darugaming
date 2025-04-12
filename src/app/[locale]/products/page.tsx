import SearchPage from "@/components/search/page";

export default function Page() {
  return (
    <div className="md:w-[1100px] w-full container mx-auto mt-20 relative text-white py-6">
      <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
        <div className="flex flex-col gap-6 mt-6">
          <h1 className="text-3xl font-bold text-start mb-8">Pesquisar Produtos</h1>
          <SearchPage />
        </div>
      </div>
    </div>
  )
}