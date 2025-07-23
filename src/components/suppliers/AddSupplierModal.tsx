import { Modal, Form, Input, Select } from 'antd';
import type { Supplier } from '../../utils/types';

interface AddSupplierModalProps {
    visible: boolean;
    onCancel: () => void;
    onSave: (supplier: Omit<Supplier, 'id'>) => void;
}

export const AddSupplierModal = ({ visible, onCancel, onSave }: AddSupplierModalProps) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title="Add Supplier"
            visible={visible}
            onOk={() => {
                form.validateFields().then(values => {
                    onSave(values);
                    form.resetFields();
                });
            }}
            onCancel={onCancel}
        >
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Supplier Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="contact" label="Contact" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="items" label="Items Supplied">
                    <Select mode="tags" placeholder="e.g., Apples, Milk" />
                </Form.Item>
            </Form>
        </Modal>
    );
};