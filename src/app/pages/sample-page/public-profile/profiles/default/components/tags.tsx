import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ITagsItem {
  label: string;
}
type ITagsItems = Array<ITagsItem>;

interface ITagsProps {
  title: string;
  className?: string;
}

const Tags = ({ title, className }: ITagsProps) => {
  const items: ITagsItems = [
    { label: 'Web Design' },
    { label: 'Code Review' },
    { label: 'Figma' },
    { label: 'Product Development' },
    { label: 'Webflow' },
    { label: 'AI' },
    { label: 'noCode' },
    { label: 'Management' },
  ];

  const renderItem = (item: ITagsItem, index: number) => {
    return (
      <Badge key={index} variant="secondary">
        {item.label}
      </Badge>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2.5 mb-2">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Tags, type ITagsItem, type ITagsItems, type ITagsProps };
