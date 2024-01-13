import { map, atom } from "nanostores";

export const loading = atom(false);
export const message = map({
  success: true,
  text: "",
  active: false,
});
