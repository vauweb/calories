import type { FunctionalComponent } from "vue";
import type { CaliumInfo } from "@/data/calium1";
import Trash from "bootstrap-icons/icons/trash.svg?raw";
import PlusCircle from "bootstrap-icons/icons/plus-circle.svg?raw";

type Props = {
  info: CaliumInfo;
  id: number;
  key: number;
  onSet: (id: number, count: number) => void;
};

export const ListProductItem: FunctionalComponent<Props> = (props) => {
  const onSet = () => {
    const count = prompt("Введите сколько фактически съели в граммах:", "0");
    if (count) {
      props.onSet(props.id, parseInt(count));
    }
  };
  const onUnSet = () => {
    if (confirm("Удалить данные?")) {
      props.onSet(props.id, 0);
    }
  };
  return (
    <li class="list-group-item d-flex align-items-center">
      <div class="flex-grow-1">
        <div>{props.info.name}</div>
        <div>
          {props.info.count100} / {props.info.need_norm}
        </div>
      </div>
      <div class="text-end ms-2">{props.info.day_norm}%</div>
      <div>
        <button
          onClick={onSet}
          type="button"
          class="btn"
          innerHTML={PlusCircle}
        ></button>
      </div>
      <div>
        <button
          onClick={onUnSet}
          type="button"
          class="btn"
          innerHTML={Trash}
        ></button>
      </div>
    </li>
  );
};
