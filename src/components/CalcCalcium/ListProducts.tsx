import type { FunctionalComponent } from "vue";
import type { CaliumInfo } from "@/data/calium1";
import { ListProductItem } from "./ListProductItem";

type Props = {
  data: CaliumInfo[];
  onSet: (id: number, count: number) => void;
};

export const ListProducts: FunctionalComponent<Props> = (props) => {
  return (
    <ul class="list-group">
      {props.data.map((info, index) => {
        return (
          <ListProductItem
            key={index}
            id={index}
            info={info}
            onSet={props.onSet}
          />
        );
      })}
    </ul>
  );
};
