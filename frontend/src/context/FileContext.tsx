import { createContext, useState } from "react";

type FileContextProps = {
  children: JSX.Element;
};

export const FileContext = createContext({
  file: "",
  setFile: (file: string) => {},
});

export const FileContextProvider = ({ children }: FileContextProps) => {
  const [file, setFile] = useState("");

  const value = { file, setFile };

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
