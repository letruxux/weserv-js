export type OutputFormat = "jpg" | "png" | "gif" | "tiff" | "webp" | "json";
export type FitOption = "contain" | "cover" | "fill" | "inside" | "outside";
export type FilterOption = "greyscale" | "sepia";
export type MaskType =
  | "circle"
  | "ellipse"
  | "triangle"
  | "triangle-180"
  | "pentagon"
  | "pentagon-180"
  | "hexagon"
  | "square"
  | "star"
  | "heart";

export interface ImageWeservOptions {
  url: string;
  w?: number;
  h?: number;
  fit?: FitOption;
  crop?: string;
  mask?: MaskType;
  mtrim?: boolean;
  mbg?: string;
  flip?: boolean;
  flop?: boolean;
  ro?: number;
  rbg?: string;
  bg?: string;
  blur?: number;
  con?: number;
  filt?: FilterOption;
  gam?: number;
  mod?: string;
  sat?: number;
  hue?: number;
  sharp?: number;
  tint?: string;
  af?: boolean;
  encoding?: boolean;
  maxage?: number;
  l?: number;
  ll?: boolean;
  default?: string;
  filename?: string;
  il?: boolean;
  n?: number;
  output?: OutputFormat;
  page?: number;
  q?: number;
  dpr?: number;
}
