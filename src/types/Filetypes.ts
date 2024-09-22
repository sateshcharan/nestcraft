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
  length: number;
  width: number;
  qty: number;
  label: number;
  material: string;
  direction: string;
  [key: string]: string | number;
};

type InputFilesType = {
  files: {
    file: File;
    properties: fileProperties;
    svg: string;
    [key: string]: File | fileProperties | string;
  }[];
  stocks: [];
};

// Define the context type
type FileContextType = {
  inputFiles: InputFilesType;
  setInputFiles: Dispatch<SetStateAction<InputFilesType>>;
  options: OptionsType;
  setOptions: Dispatch<SetStateAction<OptionsType>>;
};

export type { OptionsType, InputFilesType, FileContextType };
