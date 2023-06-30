interface IFilters {
    [category: string]: {
        [name: string]: number | null;
    };
}

export interface ICheckedButtons {
    [key: string]: boolean;
}

export interface ITreeItemProps {
    name: string;
    count: number | null;
    isChecked: boolean;
    onClick: () => void;
}

export interface FiltersTreeProps {
    filters: IFilters;
}