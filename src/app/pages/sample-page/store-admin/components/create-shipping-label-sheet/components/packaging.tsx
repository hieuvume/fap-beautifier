import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export const Packaging = () => {
  const [packageName, setPackageName] = useState('Mike Anderson – Medium Box');
  const [totalWeight, setTotalWeight] = useState('2.1');
  const [length, setLength] = useState('48');
  const [width, setWidth] = useState('36');
  const [height, setHeight] = useState('20');

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 px-5">
        <CardTitle>Packaging</CardTitle>
      </CardHeader>

      <CardContent className="px-5">
        <div className="space-y-4.5">
          {/* Package Name */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-xs text-mono font-medium">Package Name</span>
            <Input
              className=""
              type="text"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 w-full">
              <span className="form-info text-xs text-mono font-medium">
                Package Type
              </span>

              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="1">Medium Box</SelectItem>
                  <SelectItem value="2">Small Box</SelectItem>
                  <SelectItem value="3">Large Box</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <span className="form-info text-xs text-mono font-medium">
                Total Weight
              </span>

              <Input
                placeholder=""
                type="text"
                value={totalWeight}
                onChange={(e) => setTotalWeight(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-5">
            <div className="flex-1 min-w-[100px]">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs text-mono font-medium">Length</span>

                <Input
                  placeholder=""
                  type="text"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[100px]">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs text-mono font-medium">Width</span>

                <Input
                  placeholder=""
                  type="text"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[100px]">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-xs text-mono font-medium">Height</span>

                <Input
                  placeholder=""
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="w-auto min-w-[66px]">
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="1">sm</SelectItem>
                  <SelectItem value="2">mm</SelectItem>
                  <SelectItem value="3">dm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox defaultChecked />
            <Label>Save package for future orders</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
