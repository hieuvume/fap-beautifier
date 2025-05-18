import { useState } from 'react';
import { DropdownMenu5 } from '@/app/partials/dropdown-menu/dropdown-menu-5';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Slider, SliderThumb } from '@/app/components/ui/slider';

const SetGoal = () => {
  const [value, setValue] = useState([1]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader className="gap-2" id="settings_set_goal">
        <CardTitle>Set a Goal</CardTitle>
        <DropdownMenu5
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="lg:p-7.5 p-5">
        <p className="text-sm text-foreground leading-5 mb-3.5">
          Define aspirations, outline the path. Set a goal to transform dreams
          into <br />
          measurable achievements.
        </p>
        <Card className="shadow-none p-3.5">
          <div className="flex justify-between items-center flex-wrap gap-2 mb-7">
            <div className="flex items-center gap-3.5 pt-1">
              <span className="text-2xl font-semibold text-foreground">$0</span>
              <span className="text-sm text-secondary-foreground">
                Pursuing opportunities, earning zero. Growth <br /> beyond
                monetary measures.
              </span>
            </div>
            <Button variant="outline">Add a Goal</Button>
          </div>
          <div className="mb-3">
            <Slider
              max={10}
              min={0}
              value={value}
              onValueChange={handleChange}
              step={1}
            >
              <SliderThumb />
            </Slider>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
};

export { SetGoal };
