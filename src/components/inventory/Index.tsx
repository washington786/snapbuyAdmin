import { useState } from 'react';
import { Card } from 'antd';
import type { InventoryItem } from '../../utils/types';
import { InventoryTable } from './InventoryTable';
import { InventoryModal } from './AddItemModal';
import { inventoryData } from '../../utils/mockData';


export const InventoryIndex = () => {
    const [data, setData] = useState<InventoryItem[]>(inventoryData);
    const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = (values: InventoryItem) => {
        if (editingItem) {
            setData(data.map(item => item.id === editingItem.id ? values : item));
        } else {
            setData([...data, { ...values, id: Date.now().toString() }]);
        }
        setIsModalOpen(false);
    };

    return (
        <Card>
            <InventoryTable
                data={data}
                onEdit={item => {
                    setEditingItem(item);
                    setIsModalOpen(true);
                }}
                onDelete={id => setData(data.filter(item => item.id !== id))}
            />

            <InventoryModal
                visible={isModalOpen}
                item={editingItem}
                onCancel={() => {
                    setEditingItem(null);
                    setIsModalOpen(false);
                }}
                onSave={handleSave}
            />
        </Card>
    );
};