/// <reference types="chrome"/>

declare namespace chrome {
  export namespace storage {
    export const local: {
      get: (keys: string[], callback: (result: any) => void) => void;
      set: (items: object) => void;
    };
  }

  export namespace runtime {
    export const onSuspend: {
      addListener: (callback: () => void) => void;
    };
  }
}
