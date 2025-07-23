import { Modal, Form, Input, InputNumber, DatePicker, Select } from 'antd';
import type { InventoryItem } from '../../utils/types';

interface InventoryModalProps {
    visible: boolean;
    item: InventoryItem | null;
    onCancel: () => void;
    onSave: (values: InventoryItem) => void;
}

export const InventoryModal = ({
    visible,
    item,
    onCancel,
    onSave
}: InventoryModalProps) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title={item ? "Edit Product" : "Add Product"}
            visible={visible}
            onOk={() => {
                form.validateFields()
                    .then(values => {
                        onSave({ ...values, id: item?.id || '' });
                        form.resetFields();
                    });
            }}
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
        >
            <Form form={form} layout="vertical" initialValues={item || {}}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="expiry" label="Expiry Date" rules={[{ required: true }]}>
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value="fruit">Fruit</Select.Option>
                        <Select.Option value="vegetable">Vegetable</Select.Option>
                        <Select.Option value="dairy">Dairy</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};