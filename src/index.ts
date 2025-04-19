import type {
  FilterOption,
  FitOption,
  ImageWeservOptions,
  MaskType,
  OutputFormat,
} from "./defs";

export class ImageWeserv {
  private baseUrl: string = "https://images.weserv.nl/";
  private options: ImageWeservOptions;

  constructor(url: string) {
    this.options = { url };
  }

  setWidth(width: number): this {
    this.options.w = width;
    return this;
  }

  setHeight(height: number): this {
    this.options.h = height;
    return this;
  }

  setFit(fit: FitOption): this {
    this.options.fit = fit;
    return this;
  }

  setCrop(crop: string): this {
    this.options.crop = crop;
    return this;
  }

  setMask(mask: MaskType): this {
    this.options.mask = mask;
    return this;
  }

  setMaskTrim(mtrim: boolean): this {
    this.options.mtrim = mtrim;
    return this;
  }

  setMaskBackground(mbg: string): this {
    this.options.mbg = mbg;
    return this;
  }

  setFlip(flip: boolean): this {
    this.options.flip = flip;
    return this;
  }

  setFlop(flop: boolean): this {
    this.options.flop = flop;
    return this;
  }

  setRotation(ro: number): this {
    this.options.ro = ro;
    return this;
  }

  setRotationBackground(rbg: string): this {
    this.options.rbg = rbg;
    return this;
  }

  setBackground(bg: string): this {
    this.options.bg = bg;
    return this;
  }

  setBlur(blur: number): this {
    this.options.blur = blur;
    return this;
  }

  setContrast(con: number): this {
    this.options.con = con;
    return this;
  }

  setFilter(filt: FilterOption): this {
    this.options.filt = filt;
    return this;
  }

  setGamma(gam: number): this {
    this.options.gam = gam;
    return this;
  }

  setModulate(mod: string): this {
    this.options.mod = mod;
    return this;
  }

  setSaturation(sat: number): this {
    this.options.sat = sat;
    return this;
  }

  setHue(hue: number): this {
    this.options.hue = hue;
    return this;
  }

  setSharpen(sharp: number): this {
    this.options.sharp = sharp;
    return this;
  }

  setTint(tint: string): this {
    this.options.tint = tint;
    return this;
  }

  setAdaptiveFilter(af: boolean): this {
    this.options.af = af;
    return this;
  }

  setEncoding(encoding: boolean): this {
    this.options.encoding = encoding;
    return this;
  }

  setMaxAge(maxage: number): this {
    this.options.maxage = maxage;
    return this;
  }

  setCompressionLevel(l: number): this {
    this.options.l = l;
    return this;
  }

  setLossless(ll: boolean): this {
    this.options.ll = ll;
    return this;
  }

  setDefaultImage(defaultImage: string): this {
    this.options.default = defaultImage;
    return this;
  }

  setFilename(filename: string): this {
    this.options.filename = filename;
    return this;
  }

  setInterlace(il: boolean): this {
    this.options.il = il;
    return this;
  }

  setNumberOfPages(n: number): this {
    this.options.n = n;
    return this;
  }

  setOutputFormat(output: OutputFormat): this {
    this.options.output = output;
    return this;
  }

  setPage(page: number): this {
    this.options.page = page;
    return this;
  }

  setQuality(q: number): this {
    this.options.q = q;
    return this;
  }

  setDevicePixelRatio(dpr: number): this {
    this.options.dpr = dpr;
    return this;
  }

  toString(): string {
    const params = new URLSearchParams();

    Object.entries(this.options).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value));
      }
    });

    return `${this.baseUrl}?${params.toString()}`;
  }
}

export { FilterOption, FitOption, ImageWeservOptions, MaskType };
