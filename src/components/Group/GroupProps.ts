export type GroupProps = {
  type: "HGroup" | "VGroup" | string;
  children?: React.ReactNode | string;
  horizontalgroupclass?: string;
  verticalgroupclass?: string;
  gap?: string;
};
