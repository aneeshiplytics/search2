import * as fieldSelection from "./mapping";

export type ViewMode = "Visual" | "Expert";
export type LogicalSelector = "AND" | "OR" | "NOT";
export type FieldSelectionType = keyof typeof fieldSelection;
export type QueryItem = {
  id: string;
  fieldSelection: FieldSelectionType;
  logicSelection: LogicalSelector;
  query: string[] | [boolean];
  isStrictSearch?: boolean;
  importedFile?: string; //TODO: check type
  isFilter?: boolean;
  children?: QueryItem[];
};

export type QueryGroup = {
  id: string;
  groupName: string;
  groupLogicOperator?: LogicalSelector;
  groupQuery: QueryItem[];
  isStrictSearch?: boolean;
  isFiltersGroup?: boolean; //TODO:
  isKeywords?: boolean; //TODO:
};

export type Query = {
  modeActive: "Visual";
  searchDataOption?: "analytics" | "searchData"; // TODO:
  serialization: QueryGroup[]; // TODO: groupLogicOperator might be required
};

export type QueryExpert = {
  modeActive: "Expert";
  serialization: { query: string }[];
  isExpertMode?: boolean;
  selectedQueryId?: string | null;
  selectedQueryItemId?: string | null;
};
