import { Metadata } from "next";
import { getAllPComponents } from "~/pcomponents/util";
import { notFound } from "next/navigation";

interface ComponentDetailPageProps {
  params: {
    slug: string;
  };
}

async function getComponentFromParams(
  params: ComponentDetailPageProps["params"]
) {
  return (await getAllPComponents()).find(
    (pcomponent) => pcomponent.slug === params.slug
  );
}

export async function generateMetadata({
  params,
}: ComponentDetailPageProps): Promise<Metadata> {
  const component = await getComponentFromParams(params);

  if (!component) {
    return {};
  }

  return {
    openGraph: {
      images: `/api/og/component?title=${component.name}`,
    },
    title: component.name,
    description: component.slug,
  };
}

export async function generateStaticParams(): Promise<
  ComponentDetailPageProps["params"][]
> {
  return (await getAllPComponents()).map((pcomponent) => ({
    slug: pcomponent.slug,
  }));
}

export default async function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  const pcomponent = await getComponentFromParams(params);
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
