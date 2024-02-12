import { Metadata } from "next";
import { getAllPComponents } from "~/pcomponents/util";
import { notFound } from "next/navigation";

interface PComponentDetailPageProps {
  params: {
    slug: string;
  };
}

async function getPComponentFromParams(
  params: PComponentDetailPageProps["params"]
) {
  return (await getAllPComponents()).find(
    (pcomponent) => pcomponent.slug === params.slug
  );
}

export async function generateMetadata({
  params,
}: PComponentDetailPageProps): Promise<Metadata> {
  const pcomponent = await getPComponentFromParams(params);

  if (!pcomponent) {
    return {};
  }

  return {
    openGraph: {
      images: `/api/og/pcomponent?title=${pcomponent.name}`,
    },
    title: pcomponent.name,
    description: pcomponent.slug,
  };
}

export async function generateStaticParams(): Promise<
  PComponentDetailPageProps["params"][]
> {
  return (await getAllPComponents()).map((pcomponent) => ({
    slug: pcomponent.slug,
  }));
}

export default async function PComponentDetailPage({
  params,
}: PComponentDetailPageProps) {
  const pcomponent = await getPComponentFromParams(params);
  console.log(params);
  if (!pcomponent) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="p-4">
        <h1 className="text-4xl font-bold">{pcomponent.name}</h1>
      </div>
    </div>
  );
}
