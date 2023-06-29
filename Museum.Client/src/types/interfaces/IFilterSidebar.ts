import React, { ReactNode } from "react";
import type { Slot } from '@fluentui/react-utilities';

export interface IFilterSidebar {
    value: string;
    icon: Slot<'div'>;
    header: string | ReactNode;
    panel: ReactNode;
}
