import { Container } from '@/app/components/common/container';
import { Alert, AlertIcon, AlertTitle } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Navbar } from '@/app/partials/navbar/navbar';
import { useFapData } from '@/app/providers/fap-data-provider';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Fragment } from 'react';
import { Link } from 'react-router';
import { useUpdateProfile } from './use-update-profile';
import { useIntl } from 'react-intl';

const UpdateProfilePage = () => {
    const { loading } = useFapData();
    const { formHtml, viewStateValue, viewStateGeneratorValue, eventValidationValue } = useUpdateProfile();
    const intl = useIntl();

    return (
        <Fragment>
            {/* Navigation Bar */}
            <Container>
                <Navbar>
                    <Button asChild variant="ghost" className="p-0 mr-auto">
                        <Link to={'/User/Profile.aspx'}>
                            <ArrowLeft className="h-4 w-4 mr-2" /> {intl.formatMessage({ id: 'PROFILE.UPDATE.BACK_TO_PROFILE' })}
                        </Link>
                    </Button>
                </Navbar>

                <Alert variant="warning" appearance="light" className="mb-4">
                    <AlertIcon>
                        <AlertCircle className="h-4 w-4" />
                    </AlertIcon>
                    <AlertTitle>
                        {intl.formatMessage({ id: 'PROFILE.UPDATE.WARNING' })}
                    </AlertTitle>
                </Alert>

                <Card className="shadow-sm overflow-hidden mb-8">
                    <CardHeader>
                        <CardTitle>{intl.formatMessage({ id: 'PROFILE.UPDATE.TITLE' })}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form method="post" action="./verProfile.aspx">
                            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="ctl00$mainContent$btnLogin" />
                            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                            <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value={viewStateValue} />
                            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value={viewStateGeneratorValue} />
                            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value={eventValidationValue} />
                            <input type="hidden" name="ctl00$mainContent$message" id="ctl00_mainContent_message" value="" />

                            <div dangerouslySetInnerHTML={{ __html: formHtml }} />
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    );
};

export { UpdateProfilePage };
