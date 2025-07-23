import { Modal, Form, Input, Button, Space } from 'antd';
import type { Recipe } from '../../utils/types';

interface RecipeModalProps {
    recipe: Recipe | null;
    visible: boolean;
    onCancel: () => void;
    onSave: (recipe: Omit<Recipe, 'id'> & { id?: string }) => void;
}

export const RecipeModal = ({ recipe, visible, onCancel, onSave }: RecipeModalProps) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title={recipe ? 'Edit Recipe' : 'Add Recipe'}
            visible={visible}
            footer={null}
            onCancel={onCancel}
        >
            <Form
                form={form}
                initialValues={recipe || { ingredients: [{ name: '', quantity: '' }] }}
                onFinish={(values) => {
                    onSave(values);
                    form.resetFields();
                }}
            >
                <Form.Item name="name" label="Recipe Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.List name="ingredients">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'name']}
                                        rules={[{ required: true }]}
                                    >
                                        <Input placeholder="Ingredient" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'quantity']}
                                        rules={[{ required: true }]}
                                    >
                                        <Input placeholder="Quantity" />
                                    </Form.Item>
                                    <Button danger onClick={() => remove(name)}>Remove</Button>
                                </Space>
                            ))}
                            <Button type="dashed" onClick={() => add()}>Add Ingredient</Button>
                        </>
                    )}
                </Form.List>

                <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>
                    Save
                </Button>
            </Form>
        </Modal>
    );
};