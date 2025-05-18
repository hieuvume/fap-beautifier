import { CommunityBadges } from '../default';
import {
  About,
  Assets,
  Network,
  Tokens3dArt,
  TokensCollected,
  TokensCreated,
} from './components';

export function ProfileNFTContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <Assets />
          <About />
          <CommunityBadges title="Badges" />
          <Network />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <TokensCreated />
            <TokensCollected />
            <Tokens3dArt />
          </div>
        </div>
      </div>
    </div>
  );
}
