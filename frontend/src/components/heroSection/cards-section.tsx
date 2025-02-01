import { Icons } from "@/lib/icons";
export const CardSection = () => {
  const cards = [
    {
      title: "Blog",
      description:
        "Use the blog template to quickly write a blog intended for publication online.",
    },
    {
      title: "Newsletter",
      description:
        "Use the newsletter template to write a newsletter intended for your audience.",
    },
  ];

  return (
    <div>
      <a
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        href="/"
      >
        <Icons.facebook className="h-6 w-6" />
        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
        <p className="text-sm leading-tight text-muted-foreground">
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </p>
      </a>
    </div>
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0">
    //   {cards.map((card, index) => (
    //     <div
    //       key={index}
    //       className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-all"
    //     >
    //       <h3 className="text-lg font-semibold">{card.title}</h3>
    //       <p className="text-gray-500 text-sm mt-1">{card.description}</p>
    //     </div>
    //   ))}
    // </div>
  );
};
