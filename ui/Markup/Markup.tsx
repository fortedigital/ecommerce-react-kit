interface MarkupProps {
  children: string;
  className?: string;
}

export default function Markup({ children, className }: MarkupProps) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
  );
}
