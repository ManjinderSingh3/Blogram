import { Icons } from "@/lib/icons";
export const CardSection = () => {
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
  );
};
