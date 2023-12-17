interface ColorMapEntry {
  name: string;
  value: string;
  bg: string;
}

type ColorsMap = {
  [key: string]: ColorMapEntry;
};

export const COLORS_MAP: ColorsMap = {
  black: {
    name: "black",
    value: "BK",
    bg: "accent-black bg-black",
  },
  white: {
    name: "white",
    value: "WT",
    bg: "bg-white border border-black",
  },
  grey: {
    name: "grey",
    value: "GY",
    bg: "bg-kpgray",
  },
  pink: {
    name: "pink",
    value: "PK",
    bg: "bg-kpPeach",
  },
  hotpink: {
    name: "hotpink",
    value: "PK",
    bg: "bg-kpPink",
  },
  natural: {
    name: "natural",
    value: "NT",
    bg: "bg-kpNatural border border-black",
  },
  blue: {
    name: "blue",
    value: "THB",
    bg: "bg-iconic",
  },
  neonyellow: {
    name: "neonyellow",
    value: "NEGN",
    bg: "bg-neon",
  },
  charcoal: {
    name: "charcoal",
    value: "GY",
    bg: "bg-kpCharcoal",
  },
};