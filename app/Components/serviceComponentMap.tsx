export const serviceComponents: Record<
  string,
  () => Promise<React.ReactElement>
> = {
  threeD: () =>
    import("../(default)/services/individualPages/threeD").then((mod) => (
      <mod.default />
    )),
  accident_recon: () =>
    import("../(default)/services/individualPages/accident_recon").then(
      (mod) => <mod.default />
    ),
  animations_simulations: () =>
    import("../(default)/services/individualPages/animations_simulations").then(
      (mod) => <mod.default />
    ),
  biomechanics: () =>
    import("../(default)/services/individualPages/biomechanics").then((mod) => (
      <mod.default />
    )),
  human_factors: () =>
    import("../(default)/services/individualPages/human_factors").then(
      (mod) => <mod.default />
    ),
  premises: () =>
    import("../(default)/services/individualPages/premises").then((mod) => (
      <mod.default />
    )),
  cdr: () =>
    import("../(default)/services/individualPages/cdr").then((mod) => (
      <mod.default />
    )),
  criminal: () =>
    import("../(default)/services/individualPages/criminal").then((mod) => (
      <mod.default />
    )),
  imaging_science: () =>
    import("../(default)/services/individualPages/imaging_science").then(
      (mod) => <mod.default />
    ),
  misc: () =>
    import("../(default)/services/individualPages/misc").then((mod) => (
      <mod.default />
    )),
  drone: () =>
    import("../(default)/services/individualPages/drone").then((mod) => (
      <mod.default />
    )),
};
