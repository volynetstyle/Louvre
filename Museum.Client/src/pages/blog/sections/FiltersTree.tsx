import React, { useCallback, useState } from "react";
import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components/unstable";
import { ToggleButton } from "@fluentui/react-components";
import { CheckboxUnchecked24Regular, CheckboxIndeterminate24Regular, PanelLeftContract20Regular } from "@fluentui/react-icons";
import { ICheckedButtons, ITreeItemProps, FiltersTreeProps } from "../types/IFiltersTree";

const CustomTreeItem: React.FC<ITreeItemProps> = ({ name, count, isChecked, onClick }) => (
  <TreeItem itemType="leaf">
    <TreeItemLayout style={{ paddingLeft: 23 }}>
      <ToggleButton
        checked={isChecked}
        icon={isChecked ? <CheckboxIndeterminate24Regular /> : <CheckboxUnchecked24Regular />}
        onClick={onClick}
      >
        {`${name} (${count})`}
      </ToggleButton>
    </TreeItemLayout>
  </TreeItem>
);

const FiltersTree: React.FC<FiltersTreeProps> = ({ filters }) => {
  const [checkedButtons, setCheckedButtons] = useState<ICheckedButtons>({});
  
  const toggleChecked = useCallback((category: string, name: string) => {
    setCheckedButtons((prevState) => ({
      ...prevState, [`${category}-${name}`]: !prevState[`${category}-${name}`]
    }));
  }, []);

  return (
    <Tree aria-label="Tree">
      {Object.entries(filters).map(([category, values]) => (
        <TreeItem key={category} itemType="branch">
          <TreeItemLayout iconBefore={<PanelLeftContract20Regular />}>{category}</TreeItemLayout>
          <Tree>
            {Object.entries(values).map(([name, count]) => {
              const isChecked = checkedButtons[`${category}-${name}`] || false;

              return (
                <CustomTreeItem
                  key={name}
                  name={name}
                  count={count}
                  isChecked={isChecked}
                  onClick={() => toggleChecked(category, name)}
                />
              );
            })}
          </Tree>
        </TreeItem>
      ))}
    </Tree>
  );
};

export default FiltersTree;