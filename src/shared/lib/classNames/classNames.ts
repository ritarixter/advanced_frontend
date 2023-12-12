type TMods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: TMods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}
