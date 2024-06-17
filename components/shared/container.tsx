import { cn } from "@/lib/helpers/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: Props) => {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};

export default Container;
