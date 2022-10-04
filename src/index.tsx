import * as React from "react";
import "./styles.scss";

export type ICounterProps = {
  className?: string;
  notionKey: string | undefined;
  desiredColumns: string;
  tableName?: string;
  tableId?: string;
};

const NotionTable: React.FC<ICounterProps> = () => {
  return <p>hi</p>;
};

export default NotionTable;
