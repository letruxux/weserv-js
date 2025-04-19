# weserv-js

A TypeScript library for interacting with the weserv.nl image processing service.

## Installation

```bash
npm install @letruxux/weserv-js
bun add @letruxux/weserv-js
pnpm add @letruxux/weserv-js
yarn add @letruxux/weserv-js
```

## Basic Usage

```typescript
import { ImageWeserv } from "@letruxux/weserv-js";

const imageUrl = new ImageWeserv("https://example.com/image.jpg")
  .setWidth(300)
  .setHeight(200)
  .setFit("cover")
  .setBlur(5)
  .toString();
```

## API Documentation

### Constructor

`new ImageWeserv(url: string)` - Creates a new instance with the source image URL.

### Transformation Methods

All methods return `this` for method chaining.

- `setWidth(width: number)` - Sets image width
- `setHeight(height: number)` - Sets image height
- `setFit(fit: FitOption)` - Sets resize mode (contain|cover|fill|inside|outside)
- `setBlur(blur: number)` - Sets blur intensity (0-100)
- `setQuality(q: number)` - Sets output quality (1-100)
- `setOutputFormat(format: OutputFormat)` - Sets output format (jpg|png|gif|tiff|webp|json)

See [src/defs.ts](./src/defs.ts) for all available options.
