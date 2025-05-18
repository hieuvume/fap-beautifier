import { Container } from '@/app/components/common/container';
import { Card, CardContent } from '@/app/components/ui/card';
import { useFapData } from '@/app/providers/fap-data-provider';
import { Loader2, MessageCircle } from 'lucide-react';
import { useAnnounce } from './use-announce';

const AnnouncePage = () => {
  const { title, content } = useAnnounce();
  const { loading } = useFapData();

  return (
    <Container>
      <div className="mb-5 flex items-center gap-2 text-primary">
        <MessageCircle className="h-5 w-5" />
        <h1 className="text-xl font-semibold">Thông báo</h1>
      </div>

      <Card className="relative">
        {loading && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl">
            <Loader2 className="h-6 w-6 text-primary animate-spin" />
          </div>
        )}
        <CardContent className="p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">{title}</h2>
            <div 
              className="prose prose-sm sm:prose max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: content || "" }}
            />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export { AnnouncePage }; 