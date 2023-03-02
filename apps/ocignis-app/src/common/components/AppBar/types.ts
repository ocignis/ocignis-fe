export type AppBarUser = {
  email: string;
  name: string;
  avatarUrl: string;
};

export type AppBarLinks = ReadonlyArray<{
  name: string;
  url: string;
  isSelected?: boolean;
  isDisabled?: boolean;
}>;

export type AppBarProps = {
  links: AppBarLinks;
  user: AppBarUser | null;
  onSignIn: () => void;
  onSignOut: () => void;
};
