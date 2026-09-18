# SF6 v5 Image Asset Import Receipt

Imported from the accepted standalone source:

- Source file: `SF6_StudyHub_Ryu_角色实战统一_v5(1).html`
- Source SHA-256: `8e2ac584a68629471523ab073c2b45ed8ec0f8200e7cd94eb8dc3923b9cd32b3`
- Source size: 37,281,440 bytes
- Import bundle SHA-256: `aa1623a5ca51f4e74fc2e2c9437497848ab76ed5f441b2823323bb9c1f53ed06`

## Imported unique assets

- 62 character Hero JPEGs = 31 characters × dark/light
- 12 Fundamentals SVG diagrams
- 18 Fundamentals evidence images
- 18 Ryu evidence images
- Total: 110 unique images

The original HTML contained 112 image references. The two extra references are duplicate fallback references for the same Ryu dark/light Hero images and are intentionally not duplicated as separate files.

## Integrity gate

The one-time GitHub runner import verified:

1. the complete ZIP SHA-256;
2. every manifest path exists;
3. all 110 unique assets match their recorded SHA-256;
4. the Hero set contains exactly 62 files;
5. the old truncated `hero-src/*.b64` transport was removed.

Runtime Hero files now live under `public/hero/`.
Historical extracted source imagery lives under `source-assets/v5-accepted/`.
