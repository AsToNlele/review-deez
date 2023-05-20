import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RGB, HSL } from '@/types/color';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertColor = (hex: string) => {
  const rgb: RGB = HEXtoRGB(hex);
  const hsl: HSL = RGBtoHSL(rgb);
  return {
    rgb, hsl,
  };
};

const HEXtoRGB = (hex: string): RGB => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return {
    r, g, b,
  };
};

const RGBtoHSL = ({ r, g, b }: RGB): HSL => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
    : 0;
  return {
    h: Math.floor(60 * h < 0 ? 60 * h + 360 : 60 * h),
    s: Math.floor(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
    l: Math.floor((100 * (2 * l - s)) / 2),
  };
};
