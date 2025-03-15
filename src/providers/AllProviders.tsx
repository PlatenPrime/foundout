import { AuthProvider } from "./AuthProvider";

interface AllProvidersProps {
  children?: React.ReactNode;
}

export function AllProviders({ children }: AllProvidersProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
