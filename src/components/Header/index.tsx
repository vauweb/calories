import type { FunctionalComponent } from "vue";
import { RouterLink } from "vue-router";
import HouseFillSvg from "bootstrap-icons/icons/house-fill.svg?component";

export const Header: FunctionalComponent = () => {
  return (
    <ul class="navbar bg-light p-2">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">
          <HouseFillSvg />
        </RouterLink>
      </li>
    </ul>
  );
};
