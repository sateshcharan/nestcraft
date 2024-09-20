import { createContext, useState, ReactNode } from "react";

type FileContextProps = {
  children: ReactNode; // Correct type for children
};

type FileContextType = {
  files: File[]; // Assuming files are of type File
  setFiles: (files: File[]) => void;
};

// Create a context with the appropriate default value
export const FileContext = createContext<FileContextType>({
  files: [],
  setFiles: () => {}, // This will be overridden by the provider
});

export const FileContextProvider = ({ children }: FileContextProps) => {
  const [files, setFiles] = useState<File[]>([]); // Define useState type as an array of File

  const value = { files, setFiles };

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
