import { Fragment, useState } from 'react';
import { ActivitiesAnniversary } from '@/app/partials/activities/anniversary';
import { ActivitiesBloggingConference } from '@/app/partials/activities/blogging-conference';
import { ActivitiesDesignerWelcome } from '@/app/partials/activities/designer-welcome';
import { ActivitiesInterview } from '@/app/partials/activities/interview';
import { ActivitiesFollowersMilestone } from '@/app/partials/activities/milestone';
import { ActivitiesNewArticle } from '@/app/partials/activities/new-article';
import { ActivitiesNewTeam } from '@/app/partials/activities/new-team';
import { ActivitiesPhotographyWorkshop } from '@/app/partials/activities/photography-workshop';
import { ActivitiesProductWebinar } from '@/app/partials/activities/product-webinar';
import { ActivitiesProjectStatus } from '@/app/partials/activities/project-status';
import { ActivitiesUpcomingContent } from '@/app/partials/activities/upcoming-content';
import { ActivitiesVirtualTeam } from '@/app/partials/activities/virtual-team';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

export function ProfileActivityContent() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);
  const years = Array.from({ length: 8 }, (_, i) => 2025 - i);

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="flex gap-5 lg:gap-7.5">
      {years.map((year, index) => (
        <Card
          key={index}
          className={`grow ${year === currentYear ? '' : 'hidden'}`}
          id={`activity_${year}`}
        >
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <div className="flex items-center space-x-2.5">
              <Label htmlFor="simple-switch" className="text-sm">
                Auto refresh:
              </Label>
              {isSwitchOn ? 'On' : 'Off'}
              <Switch
                id="simple-switch"
                size="sm"
                className="ms-2"
                checked={isSwitchOn}
                onCheckedChange={handleSwitchToggle}
              />
            </div>
          </CardHeader>
          <CardContent>
            {(year === 2025 || year === 2023 || year === 2022) && (
              <ActivitiesNewArticle />
            )}
            {(year === 2025 || year === 2022) && <ActivitiesInterview />}
            {(year === 2025 || year === 2021) && (
              <ActivitiesPhotographyWorkshop />
            )}
            <ActivitiesUpcomingContent />
            {(year === 2025 || year === 2019) && <ActivitiesProductWebinar />}
            <ActivitiesFollowersMilestone />
            {(year === 2025 || year === 2021) && <ActivitiesProjectStatus />}
            {(year === 2025 || year === 2018) && (
              <ActivitiesBloggingConference
                image={
                  <Fragment>
                    <img
                      src={toAbsoluteUrl(`/media/illustrations/3.svg`)}
                      className="dark:hidden max-h-[160px]"
                      alt="image"
                    />
                    <img
                      src={toAbsoluteUrl(`/media/illustrations/3-dark.svg`)}
                      className="light:hidden max-h-[160px]"
                      alt="image"
                    />
                  </Fragment>
                }
              />
            )}
            <ActivitiesDesignerWelcome />
            {(year === 2025 || year === 2017) && <ActivitiesNewTeam />}
            <ActivitiesVirtualTeam />
            <ActivitiesAnniversary />
          </CardContent>
          <CardFooter className="justify-center">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">All-time Activity</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
      <div className="flex flex-col gap-2.5">
        {years.map((year, index) => (
          <Button
            key={index}
            variant={year === currentYear ? 'primary' : 'dim'}
            appearance="ghost"
            size="sm"
            className="justify-start gap-1"
            onClick={() => setCurrentYear(year)}
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
