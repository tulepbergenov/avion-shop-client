import { IChildren, IDivElement } from "@/shared/types";

export interface IContainer extends IChildren, Omit<IDivElement, "children"> {}
