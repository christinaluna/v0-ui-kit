"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type FileUploadProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> & {
  /** Label displayed above the control. */
  label?: string;
  /** Helper text displayed below the control. */
  helperText?: string;
  /** Error message displayed below the control. */
  error?: string;
  /** Called when selected files change. */
  onFilesChange?: (files: FileList | null) => void;
};

/**
 * File upload with an accessible dropzone-style UI.
 * Uses a real `<input type="file" />` for native behavior.
 */
export function FileUpload({
  className,
  label,
  helperText,
  error,
  onFilesChange,
  id,
  disabled,
  multiple,
  accept,
  ...props
}: FileUploadProps) {
  const reactId = React.useId();
  const inputId = id ?? `file-${reactId}`;
  const describedById = `${inputId}-desc`;
  const showDescription = Boolean(error || helperText);

  const [fileNames, setFileNames] = React.useState<string[]>([]);

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className={cn(
            "mb-2 block text-sm font-medium text-foreground",
            disabled && "opacity-70",
          )}
        >
          {label}
        </label>
      ) : null}

      <label
        htmlFor={inputId}
        className={cn(
          "group relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-border/70 bg-card p-6 text-center shadow-soft transition-colors",
          "hover:bg-muted/60",
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background",
          disabled && "pointer-events-none opacity-60",
          error && "border-error",
        )}
      >
        <div className="inline-grid size-11 place-items-center rounded-lg bg-muted text-foreground">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
            <path
              d="M12 3v12m0-12 4 4m-4-4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 15v4h16v-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">
            Click to upload
            <span className="text-muted-foreground"> or drag and drop</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {accept ? `Accepted: ${accept}` : "Any file type"}
            {multiple ? " • Multiple files supported" : null}
          </p>
        </div>

        <input
          id={inputId}
          type="file"
          className="sr-only"
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          aria-invalid={error ? true : undefined}
          aria-describedby={showDescription ? describedById : undefined}
          onChange={(e) => {
            const files = e.currentTarget.files;
            onFilesChange?.(files);
            setFileNames(files ? Array.from(files).map((f) => f.name) : []);
          }}
          {...props}
        />
      </label>

      {fileNames.length ? (
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
          {fileNames.slice(0, 3).map((n) => (
            <li key={n} className="truncate">
              {n}
            </li>
          ))}
          {fileNames.length > 3 ? (
            <li className="text-xs">+ {fileNames.length - 3} more</li>
          ) : null}
        </ul>
      ) : null}

      {showDescription ? (
        <p
          id={describedById}
          className={cn(
            "mt-2 text-sm",
            error ? "text-error" : "text-muted-foreground",
          )}
        >
          {error ?? helperText}
        </p>
      ) : null}
    </div>
  );
}


