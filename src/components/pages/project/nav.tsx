import { NavToggle, NavToggles } from '@/components';

export const NavComponent = () => (
  <NavToggles>
    <NavToggle
      url="/project?filter=all"
      label="ALL"
      paramKey="filter"
      value="all"
      fallback
    />
    <NavToggle
      url="/project?filter=ongoing"
      label="ONGOING"
      paramKey="filter"
      value="ongoing"
    />
    <NavToggle
      url="/project?filter=finished"
      label="FINISHED"
      paramKey="filter"
      value="finished"
    />
  </NavToggles>
);
