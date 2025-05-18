/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ChangeEvent,
  DragEvent,
  FC,
  useCallback,
  useRef,
  useState,
} from 'react';
import { getAcceptTypeString, getListFiles, openFileDialog } from './utils';

interface ImageInputFile {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

type ImageInputFiles = ImageInputFile[];

interface ImageInputProps {
  value: ImageInputFiles;
  onChange: (value: ImageInputFiles, addUpdatedIndex?: number[]) => void;
  children?: (props: ImageInputExport) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  acceptType?: string[];
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

interface ImageInputExport {
  fileList: ImageInputFiles;
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isDragging: boolean;
  dragProps: {
    onDrop: (e: any) => void;
    onDragEnter: (e: any) => void;
    onDragLeave: (e: any) => void;
    onDragOver: (e: any) => void;
    onDragStart: (e: any) => void;
  };
}

export const DEFAULT_NULL_INDEX = -1;
export const DEFAULT_DATA_URL_KEY = 'dataURL';

const ImageInput: FC<ImageInputProps> = ({
  value,
  acceptType,
  inputProps,
  multiple,
  children,
  onChange,
}) => {
  const inValue = value || [];
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyUpdate, setKeyUpdate] = useState<number>(DEFAULT_NULL_INDEX);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onImageRemoveAll = useCallback((): void => {
    onChange?.([]);
  }, [onChange]);

  const handleClickInput = useCallback(() => {
    openFileDialog(inputRef);
  }, [inputRef]);

  const onImageUpload = useCallback((): void => {
    handleClickInput();
  }, [handleClickInput]);

  const onInputChange = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    await handleChange(e.target.files);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleChange = async (files: FileList | null) => {
    if (!files) return;
    const fileList = await getListFiles(files, DEFAULT_DATA_URL_KEY);
    if (!fileList.length) return;
    let updatedFileList: ImageInputFiles;
    const updatedIndexes: number[] = [];
    if (keyUpdate > DEFAULT_NULL_INDEX) {
      const [firstFile] = fileList;
      updatedFileList = [...inValue];
      updatedFileList[keyUpdate] = firstFile;
      updatedIndexes.push(keyUpdate);
    } else if (multiple) {
      updatedFileList = [...inValue, ...fileList];
      for (let i = inValue.length; i < updatedFileList.length; i += 1) {
        updatedIndexes.push(i);
      }
    } else {
      updatedFileList = [fileList[0]];
      updatedIndexes.push(0);
    }
    onChange?.(updatedFileList, updatedIndexes);
  };

  const onImageRemove = (index: number | number[]): void => {
    const updatedList = [...inValue];
    if (Array.isArray(index)) {
      index.forEach((i) => {
        updatedList.splice(i, 1);
      });
    } else {
      updatedList.splice(index, 1);
    }
    onChange?.(updatedList);
  };

  const onImageUpdate = (index: number): void => {
    setKeyUpdate(index);
    handleClickInput();
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleChange(e.dataTransfer.files);
    }
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={getAcceptTypeString(acceptType)}
        multiple={multiple}
        onChange={(e) => {
          onInputChange(e);
        }}
        style={{ display: 'none' }}
        {...inputProps}
      />
      {children?.({
        fileList: inValue,
        onImageUpload,
        onImageRemove,
        onImageUpdate,
        onImageRemoveAll,
        dragProps: {
          onDrop: handleDrop,
          onDragEnter: handleDragIn,
          onDragLeave: handleDragOut,
          onDragOver: handleDrag,
          onDragStart: handleDragStart,
        },
        isDragging,
      })}
    </>
  );
};

export {
  ImageInput,
  type ImageInputProps,
  type ImageInputFiles,
  type ImageInputFile,
};
