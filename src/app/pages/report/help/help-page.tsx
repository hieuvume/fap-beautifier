import { Container } from '@/app/components/common/container';
import { useHelp } from './use-help';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { cn } from '@/app/lib/utils';
import { ChevronDown, HelpCircle, Loader2, Mail, MessageCircle, Phone, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Separator } from '@/app/components/ui/separator';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { useIntl } from 'react-intl';
import { HelpQuestion } from './types';

const HelpPage = () => {
  const intl = useIntl();
  const { questions, fetchAnswer, getAnswer, isAnswerLoading, loading } = useHelp();
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<HelpQuestion[]>([]);

  // Single useEffect to handle filtering questions
  useEffect(() => {
    if (!questions.length) {
      setFilteredQuestions([]);
      return;
    }
    
    if (searchQuery.trim() === '') {
      setFilteredQuestions(questions);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredQuestions(
        questions.filter(q => 
          q.question.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  }, [searchQuery, questions]);

  const toggleQuestion = (id: string) => {
    // If not loaded yet, fetch the answer
    if (isAnswerLoading(id)) {
      fetchAnswer(id);
    }
    
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-8">
          <Card className="relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-background/70 flex items-center justify-center z-10 rounded-xl backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground animate-pulse">{intl.formatMessage({ id: 'HELP.LOADING.QUESTIONS' })}</p>
                </div>
              </div>
            )}
            
            <CardHeader className="border-b bg-muted/30">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{intl.formatMessage({ id: 'HELP.TITLE' })}</CardTitle>
                  <CardDescription>
                    {intl.formatMessage({ id: 'HELP.QUESTIONS_COUNT' }, { count: filteredQuestions.length })}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={intl.formatMessage({ id: 'HELP.SEARCH.PLACEHOLDER' })}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9"
                />
                {searchQuery && (
                  <Button 
                    variant="ghost" 
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
            
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="flex flex-col p-1">
                  {filteredQuestions.length === 0 ? (
                    <div className="text-muted-foreground text-center py-12 px-4">
                      {searchQuery ? (
                        <div className="flex flex-col items-center gap-2">
                          <MessageCircle className="h-8 w-8 text-muted-foreground/50" />
                          <div>
                            <p className="font-medium">{intl.formatMessage({ id: 'HELP.SEARCH.NO_MATCH_TITLE' })}</p>
                            <p className="text-sm text-muted-foreground">
                              {intl.formatMessage({ id: 'HELP.SEARCH.NO_MATCH_MESSAGE' }, {
                                clearLink: (
                                  <Button variant="ghost" size="sm" onClick={clearSearch} className="p-0 h-auto">
                                    {intl.formatMessage({ id: 'HELP.SEARCH.CLEAR' })}
                                  </Button>
                                )
                              })}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <MessageCircle className="h-8 w-8 text-muted-foreground/50" />
                          <p>{intl.formatMessage({ id: 'HELP.EMPTY.NO_QUESTIONS' })}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    filteredQuestions.map((question, index) => (
                      <div key={question.id} className="mb-1">
                        <div 
                          className={cn(
                            "flex items-center p-4 cursor-pointer hover:bg-muted/40 rounded-md transition-colors",
                            expandedQuestions[question.id] && "bg-muted/30"
                          )}
                          onClick={() => toggleQuestion(question.id)}
                        >
                          <div className={cn(
                            "h-6 w-6 rounded-full flex items-center justify-center mr-3 border transition-colors",
                            expandedQuestions[question.id] ? "bg-primary border-primary text-white" : "border-muted-foreground/30 text-muted-foreground"
                          )}>
                            <ChevronDown 
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                expandedQuestions[question.id] && "transform rotate-180"
                              )} 
                            />
                          </div>
                          <h3 className={cn(
                            "text-base transition-colors",
                            expandedQuestions[question.id] ? "font-medium" : "font-normal text-gray-600"
                          )}>
                            {question.question}
                          </h3>
                        </div>
                        
                        {expandedQuestions[question.id] && (
                          <div className="px-4 pb-5 pt-1">
                            <div className="ml-9 pl-4 border-l border-muted">
                              {isAnswerLoading(question.id) ? (
                                <div className="flex items-center py-6">
                                  <Loader2 className="h-4 w-4 text-primary animate-spin mr-2" />
                                  <span className="text-muted-foreground animate-pulse">{intl.formatMessage({ id: 'HELP.LOADING.ANSWER' })}</span>
                                </div>
                              ) : (
                                <>
                                  {!getAnswer(question.id) ? (
                                    <div className="py-4 text-muted-foreground">
                                      <p>{intl.formatMessage({ id: 'HELP.ANSWER.NOT_AVAILABLE' })}</p>
                                    </div>
                                  ) : (
                                    <div 
                                      className="prose prose-sm max-w-none text-muted-foreground py-2"
                                      dangerouslySetInnerHTML={{ __html: getAnswer(question.id) }} 
                                    />
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {index < filteredQuestions.length - 1 && (
                          <Separator className="my-1" />
                        )}
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Card>
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="text-base">{intl.formatMessage({ id: 'HELP.TIPS.TITLE' })}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <div className="bg-primary/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-medium">1</span>
                  </div>
                  <p className="text-muted-foreground">{intl.formatMessage({ id: 'HELP.TIPS.TIP_1' })}</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-medium">2</span>
                  </div>
                  <p className="text-muted-foreground">{intl.formatMessage({ id: 'HELP.TIPS.TIP_2' })}</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-medium">3</span>
                  </div>
                  <p className="text-muted-foreground">{intl.formatMessage({ id: 'HELP.TIPS.TIP_3' })}</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="text-base">{intl.formatMessage({ id: 'HELP.CONTACT.TITLE' })}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                {intl.formatMessage({ id: 'HELP.CONTACT.MESSAGE' })}
              </p>
              
              <div className="bg-muted/70 rounded-xl p-3 px-5 mb-4">
                <p className="font-medium text-sm mb-2">{intl.formatMessage({ id: 'HELP.CONTACT.STUDENT_SERVICE_OFFICE' })}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href="mailto:dichvusinhvien@fe.edu.vn" className="hover:underline">
                      dichvusinhvien@fe.edu.vn
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href="tel:02473081313" className="hover:underline">
                      (024)7308.13.13
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { HelpPage }; 