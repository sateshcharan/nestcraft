import { Dispatch, SetStateAction } from "react";

// Define the type for options
type OptionsType = {
  useMaterial: boolean;
  estimateSheets: boolean;
  useLable: boolean;
  useDirection: boolean;
  edgeBanding: boolean;
  [key: string]: boolean;
};

type fileProperties = {
  label: number;
  length: number;
  width: number;
  qty: number;
  [key: string]: number;
};

type InputFilesType = {
  files: File[];
  stocks: [];
  svgFiles: string[];
  fileProperties: fileProperties[];
};

// Define the context type
type FileContextType = {
  inputFiles: InputFilesType;
  setInputFiles: Dispatch<SetStateAction<InputFilesType>>;
  options: OptionsType;
  setOptions: Dispatch<SetStateAction<OptionsType>>;
};

export type { OptionsType, InputFilesType, FileContextType };
