import { Button, Space } from 'antd';

interface InventoryActionsProps {
    onAdd: () => void;
    onBulkDelete: (ids: string[]) => void;
    selectedCount: number;
}

export const InventoryActions = ({
    onAdd,
    onBulkDelete,
    selectedCount
}: InventoryActionsProps) => {
    return (
        <Space>
            <Button type="primary" onClick={onAdd}>
                Add Product
            </Button>

            {selectedCount > 0 && (
                <Button
                    danger
                    onClick={() => onBulkDelete([])}
                >
                    Delete Selected ({selectedCount})
                </Button>
            )}
        </Space>
    );
};