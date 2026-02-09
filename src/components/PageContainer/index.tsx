import { PageContainerProps } from "./types";
import "./styles.scss";

export const PageContainer = ({ children }: PageContainerProps) => <div className="page-container">{children}</div>;
