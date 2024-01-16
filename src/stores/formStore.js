import { map, atom, deepMap } from "nanostores";

export const loading = atom(false);
export const loadingState = deepMap({
  loadingDictionary: {},
});
export const message = map({
  success: true,
  text: "",
  active: false,
});
