import { useState } from 'react';
import { Button, Row } from 'antd';
import { supplierData } from '../utils/mockData';
import { SupplierTable } from '../components/suppliers/SupplierTable.tsx';
import { AddSupplierModal } from '../components/suppliers/AddSupplierModal.tsx';


export const SuppliersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ padding: '24px' }}>
            <Row justify="end" style={{ marginBottom: '16px' }}>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Add Supplier
                </Button>
            </Row>
            <SupplierTable data={supplierData} />
            <AddSupplierModal
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onSave={(supplier) => console.log('Save:', supplier)}
            />
        </div>
    );
};